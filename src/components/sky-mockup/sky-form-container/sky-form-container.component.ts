import { interval, take, tap } from 'rxjs';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { data } from 'src/datas/data';

@Component({
  selector: 'app-sky-form-container',
  templateUrl: './sky-form-container.component.html',
  styleUrls: ['./sky-form-container.component.scss'],
})
export class SkyFormContainerComponent implements OnInit {
  @ViewChildren('form') form: QueryList<any>;
  data: any[] = data;
  constructor() {}

  ngOnInit(): void {}

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
