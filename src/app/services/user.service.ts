import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {AuthService} from "../core/services/auth.services"
import { User } from '../models/User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions  =<any> "";
 private rootURI = ''; private controllerName = 'user';
  constructor(private http: HttpClient, private AuthService:AuthService) { 
    this.rootURI = AuthService.rootURI;
    this.httpOptions = { headers:this.AuthService.CurstomHeader() };
  }


//#region  
Gets() {
  
  return this.http.get<User[]>(this.rootURI+`/`+this.controllerName +`/Gets`, this.httpOptions);
}

// Gets( ) {
//   debugger;
//   return this.http.get(this.rootURI+`/`+this.controllerName +`/Gets`);

// }
Get( Id:any) {
  debugger;
  return this.http.get(this.rootURI+`/`+this.controllerName +`/Get/${Id}`, this.httpOptions);
}

Save(obj: any) {
  return this.http.post(this.rootURI+`/`+this.controllerName +`/SaveBrand`, obj, { observe: 'body' });
}
Delete(Id: any) {
  return this.http.get(this.rootURI+`/`+this.controllerName +`/Delete/${Id}`);
}
//#endregion
}
