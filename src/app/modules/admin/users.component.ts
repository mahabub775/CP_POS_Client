import { Component } from '@angular/core';
import { User } from '../../models/User';
import {AuthService} from '../../core/services/auth.services';
import {UserService} from '../../services/user.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-users',
  template: `
  <button nz-button (click)="NewUser()" nzType="primary">New</button>
    <br/>
  <nz-table #basicTable [nzData]="listOfData">
  <thead>
    <tr>
      <th>Name</th>
      <th>Login Id</th>
      <th>Email</th>
      <th>Phone Number</th>
      <th>Address</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of basicTable.data">
      <td>{{ data.name }}</td>
      <td>{{ data.username }}</td>
      <td>{{ data.email }}</td>
      <td>{{ data.phoneNumber }}</td>
      <td>{{ data.address }}</td>
      <td>
        <a (click)="Edit(data.userId)">Edit</a>&nbsp;
        <a nz-popconfirm nzPopconfirmTitle="Sure to delete?" (nzOnConfirm)="deleteRow(data.userId)">Delete</a>
      </td>
    </tr>
  </tbody>
</nz-table>
  `,
  styles: ``
})
export class UsersComponent {


  // "UserName" :"abdullah785",
  // "name": "Abdullah Al Mamun",
  // "email": "abdullah_mamun@gmail.com",
  // "phoneNumber": "01775143005",
  //   "address":"mohammadpur",
  // "password": "Cd12345#"
  httpOptions  =<any> "";
  listOfData: User[] = [
    { userId : 'asd45452s5d', name: 'abdiu',  username: 'abdulla', email:'mahabub775@d',phoneNumber: '1254664744', address: 'New York No. 1 Lake Park' , roleNames:[]}
   ];

  constructor( private _httpclient:HttpClient, private Auth:  AuthService ){
    this.httpOptions = { headers:this.Auth.CurstomHeader() };
    this.onGridReady();
  }

  onGridReady() {
     this._httpclient.get(this.Auth.rootURI+'/User/Gets',this.httpOptions ).subscribe(respons =>{
      debugger;
      this.listOfData =(<any>respons)
    },err=>{
      debugger;
      console.log(err);
      alert(err.statusText); 
    }
    );
      
    }

  
  

  NewUser(){

  }

  deleteRow(userId:string){

  }

  Edit(userId:string){

  }

}
// interface Person {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
// }