import { Injectable } from '@angular/core';
import {JwtHelperService} from'@auth0/angular-jwt'
import {  CanActivate , Router} from '@angular/router';
// import { AdminlayoutComponent } from '../admin/adminlayout.component';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

//import { NavmainmenuComponent } from '../admin/chayapath/navmainmenu/navmainmenu.component';
@Injectable()
export class AuthService implements CanActivate {

 // constructor() { }

 readonly rootURI =  'https://localhost:7164/api'; 
 oLoggedInUser:any;
  constructor( private  Router :Router,  public  jwthelper  :JwtHelperService  ) 
  { 
  }

  canActivate()
  {
    debugger; 
    const token = localStorage.getItem("jwt");
      if(token && !this.jwthelper.isTokenExpired(token))
      {
        return true;
      }else{
       // this.Router.navigate(['mainlayout']);
        this.Router.navigateByUrl('/admin;');
         //this.router.navigate(['/', 'users']);   this.router.navigateByUrl('/users;display=verbose/sammy');
        return false;
      }
  }
  CurstomHeader(){
    var t = localStorage.getItem("jwt");
    var headers_object = new HttpHeaders({  'Content-Type': 'application/json',  'Authorization': "Bearer "+t  });
    
    return  headers_object
  }
  
  GetuserLoginInfo(){
    //JSON.stringify(logininfo)
    this.oLoggedInUser= localStorage.getItem("logininfo");
     return this.oLoggedInUser?  JSON.parse(this.oLoggedInUser):null;
  }
// //#region  Login
// Login(oUser: any  ) {
//   debugger;
//   return this.http.post(this.rootURI+'/Auth/Login/',oUser);
// }
// //#endregion

// LogOut(){
//   return this.http.get(this.rootURI+`/Auth/GetLogout`);
// }
}
