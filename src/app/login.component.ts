import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import {AuthService} from './core/services/auth.services';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  template: ` <div fxLayout="row" fxLayoutAlign="center center" style="height:100vh;">
  <form nz-form [formGroup]="validateForm" class="login-form" (ngSubmit)="submitForm()">
  <div fxLayoutAlign="center center">
  <h2 nz-typography> Login </h2>
  </div>
  <nz-form-item>
    <nz-form-control nzErrorTip="Please input your username!">
      <nz-input-group nzPrefixIcon="user">
        <input type="text" nz-input formControlName="userName" placeholder="Username" />
      </nz-input-group>
    </nz-form-control>
  </nz-form-item>
  <nz-form-item>
    <nz-form-control nzErrorTip="Please input your Password!">
      <nz-input-group nzPrefixIcon="lock">
        <input type="password" nz-input formControlName="password"  minlength="6" placeholder="Password" />
      </nz-input-group>
    </nz-form-control>
  </nz-form-item>
  <div nz-row class="login-form-margin">
    <div nz-col [nzSpan]="12">
      <label nz-checkbox formControlName="remember">
        <span>Remember me</span>
      </label>
    </div>
    <div nz-col [nzSpan]="12">
      <a class="login-form-forgot">Forgot password</a>
    </div>
  </div>
  <button nz-button class="login-form-button login-form-margin" [nzType]="'primary'">Log in</button>
  
</form>
</div>

  `,
  styles: [
    `
    .login-form {
      max-width: 300px;
    }

    .login-form-margin {
      margin-bottom: 16px;
      
    }

    .login-form-forgot {
      float: right;
    }

    .login-form-button {
      width: 100%;
    }
    `
  ]
})
export class LoginComponent implements OnInit {

  
  @Output() public LoginResult = new EventEmitter();
  validateForm:  FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }>;


  UserName="Abdullah3652"; Password = "Kc987#2"; Message = "";
   
  constructor(private fb: NonNullableFormBuilder,  private _httpclient:HttpClient, private Authservice:  AuthService ) {
    //this.UserName="Admin"; this.Password ="123"; 
    this.validateForm= this.fb.group({
      userName: ['Abdullah3652', [Validators.required]],
      password: ['Kc987#2', [Validators.required]],
      remember: [true]
    });

    this.Message = "";
   
   }
  
  ngOnInit(): void {
   // this.Login();//Temporary open it will be close after
  }

  submitForm(): void {
    if (this.validateForm.valid) 
    {
      //console.log('submit', this.validateForm.value);
      var oLoginObject  = {userName:this.validateForm.value.userName, password:this.validateForm.value.password}; 
      this._httpclient.post(this.Authservice.rootURI+'/Auth/Login',oLoginObject).subscribe(respons =>{
        const token = (<any>respons).token;
        localStorage.setItem('jwt',token);
        this.LoginResult.emit("sucess");
      },err=>{
        debugger;
        console.log(err);
        this.Message = err.statusText; 
      }
      );

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  Login()
  {

    //console.log(this.Authservice.rootURI);

       if(this.UserName!='' && this.Password!='')
       {
        var oLoginObject  = {userName:this.UserName, password:this.Password}; 
        this._httpclient.post(this.Authservice.rootURI+'/Auth/Login',oLoginObject).subscribe(respons =>{
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
