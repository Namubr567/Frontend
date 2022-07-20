import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ServicesService } from '../services/services.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
user:User=new User();
  constructor(private servicesService:ServicesService,public router:Router) { }

  ngOnInit(): void {
  }
adminLogin(){
  console.log(this.user);
  this.servicesService.loginAdmin(this.user).subscribe(data=>{

    alert("Login successfull"),this.router.navigate(['login'])
  },error=>alert("Sorry please enter correct id and password"));
}
}
