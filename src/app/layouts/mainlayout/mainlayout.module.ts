import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainlayoutRoutingModule } from './mainlayout-routing.module';
import { MainlayoutComponent } from './mainlayout.component';
import { LoginComponent } from '../../modules/login/login.component';
 import { LoginModule } from '../../modules/login/login.module';
@NgModule({
  declarations: [
    MainlayoutComponent,
    LoginComponent
  ],
  imports: [
    LoginModule,
    //LoginComponent,
    CommonModule,
    MainlayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class MainlayoutModule { }
