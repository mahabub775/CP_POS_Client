import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {AuthService} from "../core/services/auth.services"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  
 private rootURI = ''; private controllerName = 'user';
  constructor(private http: HttpClient, private AuthService:AuthService) { 
    this.rootURI = AuthService.rootURI;
  }


//#region  
Gets( ) {
  debugger;
  return this.http.get(this.rootURI+`/`+this.controllerName +`/Gets`);
}
Get( Id:any) {
  debugger;
  return this.http.get(this.rootURI+`/`+this.controllerName +`/Get/${Id}`);
}

Save(obj: any) {
  return this.http.post(this.rootURI+`/`+this.controllerName +`/SaveBrand`, obj, { observe: 'body' });
}
Delete(Id: any) {
  return this.http.get(this.rootURI+`/`+this.controllerName +`/Delete/${Id}`);
}
//#endregion
}
