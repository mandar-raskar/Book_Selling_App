import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  configUrl = 'http://172.16.11.25:3005/';
  constructor(private router : Router,private http: HttpClient) {}

  setheaders() {
    //this.token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
   // headers = headers.set('authorization', 'Bearer ' + this.token);
    return headers;
  }

    login(admin){
      let headers = this.setheaders;
      return this.http.post(this.configUrl + "users/Users", admin);
  
    
      // if (admin.email == "admin@katalyst.com" && admin.password == "1234"){
       //this.router.navigate(["main"]);
      // }
    }
  }
    
  

