import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { User } from '../../models/User';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-userregistration',
  template: `
    <p>
      userregistration works!
    </p>
  `,
  styles: ``
})
export class UserregistrationComponent implements OnInit {


  
  userid:any;
  private User : any;
   constructor(private UserService:UserService,  private ar: ActivatedRoute) {
    
   }

   ngOnInit(): void
   {
    this.userid =   this.ar.snapshot.paramMap.get('id');
    if(this.userid !='' )
    {
        this.UserService.Get(this.userid).subscribe(r=> {
          this.User=JSON.parse(r as any);
        });
    }
  }



}
