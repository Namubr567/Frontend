import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './models/login';
import { NewUser } from './models/newUser';
import { complains } from './models/complains';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private httpClient:HttpClient) { }

  loginAdmin(login:Login):Observable<object>{
    console.log(login)
    return this.httpClient.post("http://localhost:8080/admin/adminlogin",login);

  }
  signupUser(newuser:NewUser):Observable<object>{
    console.log(newuser)
    return this.httpClient.post("http://localhost:8080/userdetails/save",newuser);
  }
  loginUser(login:Login):Observable<object>{
    console.log(login)
    return this.httpClient.post("http://localhost:8080/userdetails/userlogin",login);
  }
  prepaidPlans():Observable<any>{
    return this.httpClient.get("http://localhost:8080/plans/getallprepaidplans");
  }
  prepaidPlansById(price:number):Observable<any>{
    return this.httpClient.get("http://localhost:8080/plans/getprepaidplansbyprice/"+price);
  }
  registerComplains(complains:complains):Observable<object>{
    console.log(complains)
    return this.httpClient.post("http://localhost:8080/complains/saveComplains",complains);
  }
  getallcomplains():Observable<any>{
    return this.httpClient.get("http://localhost:8080/complains/getallcomplains");
  }
}