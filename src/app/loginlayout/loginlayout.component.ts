import { Component } from '@angular/core';
import {JwtHelperService} from'@auth0/angular-jwt'
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginlayout',
  templateUrl: './loginlayout.component.html',
  styles: ``
})
export class LoginlayoutComponent {
  public IsLoggedIn = false;
  constructor(private _router: Router, private jwthelper:JwtHelperService) {
   // debugger;
    this.IsLoggedIn = this.checkIsAuthnticated();

  }


  
  checkIsAuthnticated(){
    var token = localStorage.getItem("jwt");
    if(token!=null && token!="" && !this.jwthelper.isTokenExpired(token)){
      return true;
    }else{
      return false;
    }
  }

  AfterLogin(res:any)
  {
    debugger;
    if(res=="sucess"){this.IsLoggedIn=true;}
    //this._router.navigate(['/admin']);
    this._router.navigateByUrl('/admin');
  }
}
