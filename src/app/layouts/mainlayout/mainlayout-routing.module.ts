import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthService} from '../../core/services/auth.services'

import { UsersComponent } from '../../modules/admin/users.component';
import { ContractorsComponent } from '../../modules/basic-operation/contractor/contractors.component';


const routes: Routes = [
  { 
    path: 'users', component: UsersComponent, loadChildren: () => import('../../modules/admin/admin.module').then(m => m.AdminModule), canActivate:[AuthService] },
  { path: 'contractors', component: ContractorsComponent, loadChildren: () => import('../../modules/basic-operation/basic-operation.module').then(m => m.BasicOperationModule), canActivate:[AuthService] },
  //{ path: 'example', component: ExamplelandingComponent, loadChildren: () => import('./example/example.module').then(m => m.ExampleModule), canActivate:[AuthService] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainlayoutRoutingModule { }
