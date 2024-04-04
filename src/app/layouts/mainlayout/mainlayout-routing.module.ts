import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthService} from '../../core/services/auth.services'



const routes: Routes = [
  { 
    path: 'admin',  loadChildren: () => import('../../modules/admin/admin.module').then(m => m.AdminModule), canActivate:[AuthService] },
  { path: 'basic',  loadChildren: () => import('../../modules/basic-operation/basic-operation.module').then(m => m.BasicOperationModule), canActivate:[AuthService] },
  //{ path: 'example', component: ExamplelandingComponent, loadChildren: () => import('./example/example.module').then(m => m.ExampleModule), canActivate:[AuthService] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainlayoutRoutingModule { }
