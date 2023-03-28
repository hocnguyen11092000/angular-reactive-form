import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyFormContainerComponent } from './sky-form-container.component';

describe('SkyFormContainerComponent', () => {
  let component: SkyFormContainerComponent;
  let fixture: ComponentFixture<SkyFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyFormContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkyFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
