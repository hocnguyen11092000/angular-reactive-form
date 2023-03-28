import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
const PASSWORD_PATTERN = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;
import {
  Subject,
  tap,
  switchMap,
  startWith,
  filter,
  take,
  BehaviorSubject,
  of,
  combineLatest,
  delay,
} from 'rxjs';

@Component({
  selector: 'app-infor-form',
  templateUrl: './infor-form.component.html',
  styleUrls: ['./infor-form.component.scss'],
})
export class InforFormComponent implements OnInit {
  @Input() data: any;
  inforForm: FormGroup;
  formSubmit$ = new Subject<any>();
  allFormValid$ = new BehaviorSubject<any>(null);
  arr: any = [];

  constructor(private _fb: FormBuilder) {}
  ngOnInit(): void {
    this.initInforForm();
    this.addAddress();

    if (this.data) {
      this.inforForm.patchValue(this.data);
    }

    this.formSubmit$
      .pipe(
        tap(() => this.inforForm.markAsDirty()),
        switchMap(() =>
          this.inforForm.statusChanges.pipe(
            startWith(this.inforForm.status),
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
    this.inforForm = this._fb.group({
      userName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          // Validators.pattern(/^[a-z]{6,32}$/i),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          // Validators.pattern(PASSWORD_PATTERN),
        ]),
      ],
      confirmPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          // Validators.pattern(PASSWORD_PATTERN),
        ]),
      ],
      address: this._fb.array([]),
    });
  }

  get address() {
    return this.inforForm.controls['address'] as FormArray;
  }

  addAddress() {
    const addressForm = this._fb.group({
      title: ['new', Validators.required],
      someThing: ['new', Validators.required],
      name: new FormGroup({
        first: new FormControl('new', Validators.minLength(2)),
        last: new FormControl('new', Validators.required),
      }),
    });
    this.address.push(addressForm);
  }

  getControls() {
    return (this.inforForm.get('address') as FormArray).controls;
  }
}
