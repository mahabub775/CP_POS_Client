import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {  AbstractControl,  FormControl,  FormGroup,  NonNullableFormBuilder,  ValidatorFn,  Validators} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { User } from '../../models/User';
import {UserService} from '../../services/user.service';
import {CommonService} from '../../services/common.services';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.services';
@Component({
  selector: 'app-userregistration',
  template: `
  <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
  <nz-form-item>
    <nz-form-label      [nzSm]="6"      [nzXs]="24"      nzFor="name"      nzRequired      nzTooltipTitle="What do you want other to call you"    >
     <span>Full Name</span>
    </nz-form-label>
    <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="Please input your name!">
      <input nz-input id="name" formControlName="name" />
    </nz-form-control>
  </nz-form-item>

  <nz-form-item>
  <nz-form-label      [nzSm]="6"      [nzXs]="24"      nzFor="username"      nzRequired      nzTooltipTitle="What do you want other to call you"    >
   <span>user Name</span>
  </nz-form-label>
  <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="Please input your username!">
    <input nz-input id="username" formControlName="username" />
  </nz-form-control>
</nz-form-item>

  <nz-form-item>
    <nz-form-label [nzSm]="6" [nzXs]="24" nzRequired nzFor="email">E-mail</nz-form-label>
    <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="The input is not valid E-mail!">
      <input nz-input formControlName="email" id="email" />
    </nz-form-control>
  </nz-form-item>
  <nz-form-item>
    <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="password" nzRequired>Password</nz-form-label>
    <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="Please input your password!">
      <input
        nz-input
        type="password"
        id="password"
        formControlName="password"
        (ngModelChange)="updateConfirmValidator()"
      />
    </nz-form-control>
  </nz-form-item>
  <nz-form-item>
    <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="checkPassword" nzRequired>Confirm Password</nz-form-label>
    <nz-form-control [nzSm]="14" [nzXs]="24" [nzErrorTip]="errorTpl">
      <input nz-input type="password" formControlName="checkPassword" id="checkPassword" />
      <ng-template #errorTpl let-control>
        @if (control.errors?.['required']) {
          Please confirm your password!
        }
        @if (control.errors?.['confirm']) {
          Two passwords that you enter is inconsistent!
        }
      </ng-template>
    </nz-form-control>
  </nz-form-item>
  
  <nz-form-item>
    <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="phoneNumber" nzRequired>Phone Number</nz-form-label>
    <nz-form-control
      [nzSm]="14"
      [nzXs]="24"
      [nzValidateStatus]="validateForm.controls['phoneNumber']"
      nzErrorTip="Please input your phone number!"
    >
      <nz-input-group [nzAddOnBefore]="addOnBeforeTemplate">
        <ng-template #addOnBeforeTemplate>
          <nz-select formControlName="phoneNumberPrefix" class="phone-select">
            <nz-option nzLabel="+88" nzValue="+88"></nz-option>
            
          </nz-select>
        </ng-template>
        <input formControlName="phoneNumber" id="'phoneNumber'" nz-input />
      </nz-input-group>
    </nz-form-control>
  </nz-form-item>

  <nz-form-item nz-row class="register-area">
    <nz-form-control [nzSpan]="14" [nzOffset]="6">
      <button nz-button nzType="primary">Register</button>
    </nz-form-control>
  </nz-form-item>
</form>
  `,
  styles: `
  [nz-form] {
    max-width: 600px;
  }

  .phone-select {
    width: 70px;
  }

  .register-are {
    margin-bottom: 8px;
  }
  `
})
export class UserregistrationComponent  {


  
  userid:any;
  private User : any;
  validateForm: FormGroup<{
    userId:FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    checkPassword: FormControl<string>;
    name: FormControl<string>;
    username: FormControl<string>;
    phoneNumberPrefix: FormControl<'+88'>;
    phoneNumber: FormControl<string>;

  }>;
  httpOptions  =<any> "";
   constructor(private fb: NonNullableFormBuilder, private _httpclient:HttpClient,  private Auth:  AuthService, private location: Location,  private UserService:UserService, private CommonService:CommonService,  private ar: ActivatedRoute) {
    this.httpOptions = { headers:this.Auth.CurstomHeader() };
    this.validateForm = this.fb.group({
      userId:'',
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      checkPassword: ['', [Validators.required, this.confirmationValidator]],
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      phoneNumberPrefix: '+88' as '+88',
      phoneNumber: ['', [Validators.required]]
    });
  }




  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  submitForm(): void {
    if (this.validateForm.valid) 
    {
      
      
      var oFormvalue = this.validateForm.value;
       var oUser = { 
            password : oFormvalue.password,    
            name: oFormvalue.name,
            userName: oFormvalue.username, 
            email:oFormvalue.email,
            phoneNumber:oFormvalue.phoneNumber,
            address:''
          }

          console.log(oUser);

          this._httpclient.post<any>(this.Auth.rootURI +'/user/Registration', oUser, this.httpOptions).subscribe(data => {
        
            this.CommonService.SaveMessage();
            this.location.back();
        // Handle success
        console.log(data);
    });
          
      //   this.UserService.Registration(oUser)
      //   response => {
      //     this.CommonService.SaveMessage();
      //     this.location.back();
      //     // Handle success
      //     console.log(response);
      //   },
      //   error => {
      //     console.error('Error saving user:', error);
      //     // Handle error
      //   }
      // );
       
       
       



    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator: ValidatorFn = (control: AbstractControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  



}
