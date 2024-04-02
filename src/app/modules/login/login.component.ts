import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  template: `
<div class="row" style="margin-top:300px;text-align:center;" >
<div class="col-md-12"><h3> User Login </h3></div>  
<div class="col-md-4">&nbsp;</div>
  <div class="col-md-4"> <input type="text" style="width:77%;"   placeholder="User" [(ngModel)]='UserName' > </div>
  <div class="col-md-4">&nbsp;</div>
  <div class="col-md-12">&nbsp;</div>
<div class="col-md-4">&nbsp;</div>
<div class="col-md-4"><input type="password" style="width:77%;" placeholder="Password"    [(ngModel)]='Password'></div>
<div class="col-md-4">&nbsp;</div>
<div class="col-md-12">&nbsp;</div>
<div class="col-md-4">&nbsp;</div>
<div class="col-md-4"><input  type="button" value="Login"  (click)="Login()"  ></div>
<div class="col-md-4">&nbsp;</div>
<div class="col-md-4">&nbsp;</div>
<div class="col-md-4">{{Message}}</div>
<div class="col-md-4">&nbsp;</div>
</div>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  
  @Output() public LoginResult = new EventEmitter();
  UserName="Abdullah3652"; Password = "Kc987#2"; Message = "";
  
  constructor(private _httpclient:HttpClient) {
    //this.UserName="Admin"; this.Password ="123"; 
    this.Message = "";
   
   }
  
  ngOnInit(): void {
   // this.Login();//Temporary open it will be close after
  }

  Login()
  {

       if(this.UserName!='' && this.Password!='')
       {
        var oLoginObject  = {userName:this.UserName, password:this.Password}; 
        this._httpclient.post('https://localhost:7164/api/Auth/Login',oLoginObject).subscribe(respons =>{
          const token = (<any>respons).token;
          localStorage.setItem('jwt',token);
          this.LoginResult.emit("sucess");
        },err=>{
          debugger;
          console.log(err);
          this.Message = err.statusText; 
        }
        );
      
       }else{
           this.Message="Pelase Type UserName & Password, And Try Again."
       }
  }
}
