import { Component, OnInit,AfterViewInit } from '@angular/core';
import {JwtHelperService} from'@auth0/angular-jwt'
import { LoginComponent } from '../../modules/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styles: ``
})
export class MainlayoutComponent implements  AfterViewInit {

  public IsLoggedIn = false;
  constructor(private _router: Router, private jwthelper:JwtHelperService) {
    debugger;
    this.IsLoggedIn = this.checkIsAuthnticated();
    // if(this.IsLoggedIn==false){
    //   document.getElementById("divlogout").style.display = 'none';
    // }
  }

  ngAfterViewInit(): void {
   
    // setTimeout(() => {
    //   this.IsLoggedIn = false;  
    // }, 1000);
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
    this._router.navigate(['/example']);
  }
Logout=()=>{
  debugger;
  localStorage.removeItem("jwt") 
  this._router.navigate(['mainlayout']);
}


}
