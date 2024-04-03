import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationRoutingModule } from './basic-operation-routing.module';
import { ContractorsComponent } from './contractors.component';
import { ContractorComponent } from './contractor.component';


@NgModule({
  declarations: [
    ContractorsComponent,
    ContractorComponent
  ],
  imports: [
    CommonModule,
    BasicOperationRoutingModule
  ]
})
export class BasicOperationModule { }
