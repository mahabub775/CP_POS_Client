import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserregistrationComponent } from './userregistration.component';
import {AuthService} from '../../core/services/auth.services'
import { UserComponent } from './user.component';
const routes: Routes = [
  //{  path: '', component: UsersComponent,  canActivate:[AuthService] },
  {  path: 'users', component: UsersComponent,  canActivate:[AuthService] },
  {  path: 'user/:id', component: UserComponent,  canActivate:[AuthService]},
  {  path: 'userreg', component: UserregistrationComponent,  canActivate:[AuthService] },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
