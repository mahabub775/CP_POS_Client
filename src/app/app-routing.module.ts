import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { MainlayoutComponent } from './layouts/mainlayout/mainlayout.component';
import { LoginComponent } from './login.component';
import {AuthService} from './core/services/auth.services'
import { AppComponent } from './app.component';
const routes: Routes = [   { path: '',   component:AppComponent },  
  { path: 'mainlayout',   component:MainlayoutComponent , 
  loadChildren: () => import('./layouts/mainlayout/mainlayout.module').then(m => m.MainlayoutModule)},  
  
  // {path: 'admin', component: AdminlayoutComponent, loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
