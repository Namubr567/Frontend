import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';
import { complains } from '../models/complains';


@Component({
  selector: 'app-adminaccount',
  templateUrl: './adminaccount.component.html',
  styleUrls: ['./adminaccount.component.css']
})
export class AdminaccountComponent implements OnInit {
  complains:complains=new complains();
  constructor(public connectservice:ConnectService,public router:Router) { }

  ngOnInit(): void {
  }
  ComplainsSubmitted(){
    console.log(this.complains);
    this.connectservice.getallcomplains().subscribe(data=>{this.router.navigate(['complainsinadmin'])});

  }

}