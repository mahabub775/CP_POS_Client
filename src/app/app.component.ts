import { Component } from '@angular/core';
import { LoginComponent } from './login.component';
import {JwtHelperService} from'@auth0/angular-jwt'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Point Of Sale System';

  public IsLoggedIn = false;
  constructor(private _router: Router, private jwthelper:JwtHelperService) {
    debugger;
    this.IsLoggedIn = this.checkIsAuthnticated();
    // if(this.IsLoggedIn==false){
    //   document.getElementById("divlogout").style.display = 'none';
    // }
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
    this._router.navigate(['/mainlayout']);
  }
}
