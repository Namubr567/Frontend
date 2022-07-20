import { Component, OnInit } from '@angular/core';
import { PlansService } from '../plans.service';
import { DonglePlans } from '../models/donglePlans';
@Component({
  selector: 'app-dongleplans',
  templateUrl: './dongleplans.component.html',
  styleUrls: ['./dongleplans.component.css']
})
export class DongleplansComponent implements OnInit {

  dongleplans:DonglePlans[]=[];
  constructor(public plansService:PlansService) { }

  ngOnInit(): void {
    this.plansService.getAllDonglePlans().subscribe((data:DonglePlans[])=>{
      this.dongleplans=data;
    })
  }

}
