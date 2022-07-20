import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 import { NewUser } from '../models/newUser';
 import { complains } from '../models/complains';
import { Post } from '../models/post';
import { User } from '../models/user';
import { customerformcomplains } from '../models/customerformcomplains';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient:HttpClient) { }

  // loginUser(user:User):Observable<object>{
  //   console.log(user)
  //   return this.httpClient.post("http://localhost:8080/user/userlogin",user);
  // }

  loginAdmin(user:User):Observable<object>{
    console.log(user)
    return this.httpClient.post("http://localhost:8080/admin/adminlogin",user);
  }


  signupUser(newuser:NewUser):Observable<object>{
    console.log(newuser)
    return this.httpClient.post("http://localhost:8080/user/signup",newuser);

  }

  contactus(customerform:customerformcomplains):Observable<object>{
    console.log(customerform)
    return this.httpClient.post("http://localhost:8080/user/contactus",customerform);

  }


   getAll():Observable<any>{
     return this.httpClient.get("http://localhost:8080/userdetails/alluserdetails");
   }
   readPostById(id:number):Observable<any>{
    return this.httpClient.get("http://localhost:8080/userdetails/getuserdetails/"+ id);
  }
  update(id:number,post:Post):Observable<any>{
    return this.httpClient.put("http://localhost:8080/userdetails/update/",post);
  }
  deleteDetails(id:number){
    return this.httpClient.delete("http://localhost:8080/userdetails/delete/"+id);
  }
}

