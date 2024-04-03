import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users.component';
import { UserregistrationComponent } from './userregistration.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserregistrationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
