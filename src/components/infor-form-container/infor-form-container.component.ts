import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { InforFormComponent } from '../infor-form/infor-form.component';
import { delay, interval, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-infor-form-container',
  templateUrl: './infor-form-container.component.html',
  styleUrls: ['./infor-form-container.component.scss'],
})
export class InforFormContainerComponent implements OnInit, AfterViewInit {
  lenght = Array.from(new Array(3));
  @ViewChildren('form') form: QueryList<InforFormComponent>;
  arr: any = [];
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  submitForm() {
    interval(100)
      .pipe(
        take(3),
        tap((val) => {
          [...this.form][val].formSubmit$.next(null);
        })
      )
      .subscribe();
  }
}
