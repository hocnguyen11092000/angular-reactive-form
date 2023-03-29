import { InforFormContainerComponent } from './../components/infor-form-container/infor-form-container.component';
import { InforFormComponent } from './../components/infor-form/infor-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzFormModule } from 'ng-zorro-antd/form';
import { SkyFormContainerComponent } from 'src/components/sky-mockup/sky-form-container/sky-form-container.component';
import { SkyFormItemComponent } from 'src/components/sky-mockup/sky-form-item/sky-form-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InforFormComponent,
    InforFormContainerComponent,
    SkyFormContainerComponent,
    SkyFormItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NzTabsModule,
    NzFormModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
