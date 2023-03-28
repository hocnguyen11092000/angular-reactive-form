import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyFormItemComponent } from './sky-form-item.component';

describe('SkyFormItemComponent', () => {
  let component: SkyFormItemComponent;
  let fixture: ComponentFixture<SkyFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyFormItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkyFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
