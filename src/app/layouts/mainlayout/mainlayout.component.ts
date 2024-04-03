import { Component, OnInit,AfterViewInit } from '@angular/core';
import {JwtHelperService} from'@auth0/angular-jwt'
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styles: ` .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  nz-header {
    background: #fff;
    padding: 0;
  }

  nz-content {
    margin: 0 16px;
  }

  nz-breadcrumb {
    margin: 16px 0;
  }

  .inner-content {
    padding: 24px;
    background: #fff;
    min-height: 360px;
  }

  nz-footer {
    text-align: center;
  } `
})
export class MainlayoutComponent implements  AfterViewInit {

  isCollapsed = false;
  public IsLoggedIn = false;
  constructor(private _router: Router, private jwthelper:JwtHelperService) {
    debugger;
    //this.IsLoggedIn = this.checkIsAuthnticated();
    // if(this.IsLoggedIn==false){
    //   document.getElementById("divlogout").style.display = 'none';
    // }
  }

  ngAfterViewInit(): void {
   
    // setTimeout(() => {
    //   this.IsLoggedIn = false;  
    // }, 1000);
  }

Logout=()=>{
  //debugger;
  //alert("It works");
  localStorage.removeItem("jwt") 
  this._router.navigate(['/']);
}


}
