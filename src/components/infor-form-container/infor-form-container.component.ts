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
  @ViewChildren('form') form: QueryList<InforFormComponent>;
  length: any = [];
  arr: any = [];
  constructor() {}

  ngOnInit(): void {
    interval(1000)
      .pipe(
        take(5),
        tap((val) => {
          const data = {
            userName: '123456' + val,
            password: '123456',
            confirmPassword: '123456',
            address: [
              {
                title: 'a',
                someThing: 'a',
                name: {
                  first: 'ab',
                  last: 'b',
                },
              },
            ],
          };

          this.length.push(data);
        })
      )
      .subscribe();
  }

  ngAfterViewInit(): void {}

  submitForm() {
    interval(100)
      .pipe(
        take(5),
        tap((val) => {
          [...this.form][val].formSubmit$.next(null);
        })
      )
      .subscribe();
  }
}
