import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }

  register(email:any,username:any,password:any){
    const data={
      email,
      username,
      password
      
    }
    return this.http.post("http://localhost:3004/register",data)
  }
  login(email:any,password:any){
    const data={
      email,
     
      password
      
    }
    return this.http.post("http://localhost:3004/login",data)
  }
}
