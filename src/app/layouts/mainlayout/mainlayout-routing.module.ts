import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthService} from '../../core/services/auth.services'
import { MainlayoutComponent } from './mainlayout.component';
import { LoginComponent } from '../../modules/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent , loadChildren: ()=>import('../../modules/login/login.module').then(m=>m.LoginModule) },
  { path: 'logout', component: MainlayoutComponent, loadChildren: () => import('./mainlayout.module').then(m => m.MainlayoutModule) },
  //{ path: 'example', component: ExamplelandingComponent, loadChildren: () => import('./example/example.module').then(m => m.ExampleModule), canActivate:[AuthService] }
  //{ path: 'example', component: ExamplelandingComponent, loadChildren: () => import('./example/example.module').then(m => m.ExampleModule), canActivate:[AuthService] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainlayoutRoutingModule { }
