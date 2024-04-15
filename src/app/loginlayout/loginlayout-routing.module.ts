import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlayoutComponent } from '../modules/admin/adminlayout.component';
import {AuthService} from '../core/services/auth.services'
import { LoginlayoutComponent } from './loginlayout.component';

const routes: Routes = [
 { path: 'admin',   component: AdminlayoutComponent ,   loadChildren: () => import('../modules/admin/admin.module').then(m => m.AdminModule),  canActivate:[AuthService]   },  
  // { path: 'admin',   children:[ {path:'',loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }]  },  
 {    path: 'logout', component: LoginlayoutComponent, loadChildren: () => import('./loginlayout.module').then(m => m.LoginlayoutModule)  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginlayoutRoutingModule { }
