import { Component, OnInit } from '@angular/core';
import { complains } from '../models/complains';
import { ServicesService } from '../services/services.service';
import { customerformcomplains } from '../models/customerformcomplains';
@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {
customerform:customerformcomplains=new customerformcomplains();
  constructor(private servicesService:ServicesService) { }

  ngOnInit(): void {
  }
contactus(){
  console.log(this.customerform);
  this.servicesService.contactus(this.customerform).subscribe(data=>{
    alert("Complaint Submitted");
  },error=>alert("Complaint not submitted"));
}
}

