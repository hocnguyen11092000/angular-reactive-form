import { Component, OnInit, Input } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subject, filter, startWith, switchMap, tap, take } from 'rxjs';
import { data } from 'src/datas/data';

@Component({
  selector: 'app-sky-form-item',
  templateUrl: './sky-form-item.component.html',
  styleUrls: ['./sky-form-item.component.scss'],
})
export class SkyFormItemComponent implements OnInit {
  data: any[] = data;
  skyForm: FormGroup;
  formSubmit$ = new Subject<any>();

  constructor(private _fb: FormBuilder) {}
  ngOnInit(): void {
    this.initInforForm();
    this.data.forEach((item: any) => {
      this.addLang(item);
    });

    // if (this.data) {
    //   this.skyForm.patchValue(this.data);
    // }

    this.formSubmit$
      .pipe(
        tap(() => this.skyForm.markAsDirty()),
        switchMap(() =>
          this.skyForm.statusChanges.pipe(
            startWith(this.skyForm.status),
            filter((status) => {
              console.log(status);
              return status !== 'PENDING';
            }),
            take(1)
          )
        ),
        filter((status) => status === 'VALID')
      )
      .subscribe((validationSuccessful) => {
        this.submitForm(validationSuccessful === 'VALID' ? true : false);
      });
  }

  submitForm(status: boolean) {
    console.log(status);
  }

  initInforForm() {
    this.skyForm = this._fb.group({
      sky: this._fb.array([]),
    });
  }

  lang() {
    return this.skyForm.controls['sky'] as FormArray;
  }

  newLang(item: any) {
    setTimeout(() => {
      item?.tier?.forEach((t: any, index: number) => {
        this.addTier(index, t);
      });
    }, 0);

    return this._fb.group({
      lang: [item.lang || '', Validators.required],
      name: [item.name || '', Validators.required],
      offerId: [item.offerId || '', Validators.required],
      tiers: this._fb.array([]),
    });
  }

  addLang(data: any) {
    this.lang().push(this.newLang(data));
  }

  newTier(t: any, skyIndex: number): FormGroup {
    setTimeout(() => {
      t?.content?.forEach((t: any, index: number) => {
        this.addContent(skyIndex, index, t);
      });
    }, 0);

    return this._fb.group({
      rank: [
        t?.rank || '',
        Validators.compose([Validators.required, Validators.min(5)]),
      ],
      name: t?.name || '',
      content: this._fb.array([]),
    });
  }

  newContent(c: any): FormGroup {
    return this._fb.group({
      pri: c?.pri || '',
      tac: c?.tac || '',
    });
  }

  langTier(skyIdx: number): FormArray {
    return this.lang().at(skyIdx).get('tiers') as FormArray;
  }

  tierContent(skyIdx: number, tierIndex: number): FormArray {
    return this.langTier(skyIdx).at(tierIndex)?.get('content') as FormArray;
  }

  addTier(skyIndex: number, t: any) {
    this.langTier(skyIndex).push(this.newTier(t, skyIndex));
  }

  addContent(skyIndex: number, index: number, t: any) {
    this.tierContent(skyIndex, index)?.push(this.newContent(t));
  }

  getSkyControls() {
    return (this.skyForm.get('sky') as FormArray).controls;
  }
}
