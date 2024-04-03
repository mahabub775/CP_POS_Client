import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthService} from '../../core/services/auth.services'
import { MainlayoutComponent } from './mainlayout.component';
import { AppComponent } from '../../app.component';
import { LoginComponent } from '../../login.component';


const routes: Routes = [
  { 
    
    path: 'logout', component: AppComponent, loadChildren: () => import('../../app-routing.module').then(m => m.AppRoutingModule) },
  //{ path: 'example', component: ExamplelandingComponent, loadChildren: () => import('./example/example.module').then(m => m.ExampleModule), canActivate:[AuthService] }
  //{ path: 'example', component: ExamplelandingComponent, loadChildren: () => import('./example/example.module').then(m => m.ExampleModule), canActivate:[AuthService] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainlayoutRoutingModule { }
