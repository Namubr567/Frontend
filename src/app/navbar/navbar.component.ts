import { Component, OnInit } from '@angular/core';
import { LoginstatusService } from '../loginstatus.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user!:any
  loginStatus:boolean=false
    constructor(private loginStatusService:LoginstatusService) { 
      this.loginStatusService.currentLoginStatus.subscribe(item=>{
        //whenever the value is updated, it will assign the value here. When the user is logged in,
        //this subscribe will be observed and change the loginStatus to true.
        console.log(item);
        this.loginStatus=item
      })
      this.loginStatusService.currentUserDetails.subscribe(res=>{
        console.log(res)
        this.user=res;
      })
    }
  
    ngOnInit(): void {
    
    }

}
