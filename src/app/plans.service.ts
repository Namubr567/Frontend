import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PaymentHistory } from './models/paymentHistory';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  private user=new BehaviorSubject<any>(localStorage.getItem('user'))



  constructor(private httpClient:HttpClient) { }

getAllPostpaidPlans():Observable<any>{
  return this.httpClient.get("http://localhost:8080/plans/allpostpaidplans");
}
readPostpaidPlanById(id:number):Observable<any>{
 return this.httpClient.get("http://localhost:8080/plans/postpaidplan/"+ id);
}

getAllPrepaidPlans():Observable<any>{
  return this.httpClient.get("http://localhost:8080/plans/allprepaidplans");
}

readPrepaidPlanById(id:number):Observable<any>{
  return this.httpClient.get("http://localhost:8080/plans/prepaidplan/"+ id);
 }


 getAllDonglePlans():Observable<any>{
  return this.httpClient.get("http://localhost:8080/plans/alldongleplans");
}

readDonglePlanById(id:number):Observable<any>{
  return this.httpClient.get("http://localhost:8080/plans/dongleplan/"+ id);
 }

postRecharge(paymentHistory:PaymentHistory):Observable<any>{
  return this.httpClient.post("http://localhost:8080/recharge/save",paymentHistory);
 }
}