import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforFormContainerComponent } from './infor-form-container.component';

describe('InforFormContainerComponent', () => {
  let component: InforFormContainerComponent;
  let fixture: ComponentFixture<InforFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforFormContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InforFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
