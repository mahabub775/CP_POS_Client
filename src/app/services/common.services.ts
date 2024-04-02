import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {AuthService} from "../core/services/auth.services"
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  
 private rootURI = '';
  constructor(private http: HttpClient, private AuthService:AuthService) { 
    this.rootURI = AuthService.rootURI;
  }


//#region  
GetsBrand( ) {
  debugger;
  return this.http.get(this.rootURI+`/Common/GetsBrand`);
}

SaveBrand(obj: any) {
  return this.http.post(this.rootURI+"/Common/SaveBrand", obj, { observe: 'body' });
}
DeleteBrand(Id: any) {
  return this.http.get(this.rootURI+`/Common/DeleteBrand/${Id}`);
}
//#endregion
}
