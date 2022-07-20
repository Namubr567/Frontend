import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { complains } from '../models/complains';

@Component({
  selector: 'app-complains',
  templateUrl: './complains.component.html',
  styleUrls: ['./complains.component.css']
})
export class ComplainsComponent implements OnInit {
  complains:complains=new complains();
  constructor(public connectservice:ConnectService) { }

  ngOnInit(): void {
  }


  public raiseComplain(){
    console.log(this.complains);
    this.connectservice.registerComplains(this.complains).subscribe(data=>{alert("complaint submitted successfully!!We will be contacting you soon")
    });
    }

}