import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  configUrl = 'http://172.16.11.25:3005/';

  constructor(private http: HttpClient) { }

  setheaders() {
    //this.token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
   // headers = headers.set('authorization', 'Bearer ' + this.token);
    return headers;
  }

  getbooks(){
   let headers = this.setheaders;
    return this.http.get(this.configUrl + "books");
  //  return headers;

  }

 
  // Change(book){
  //   var id = localStorage.getItem("id");
  //   console.log(book)
  //   let headers = this.setheaders;
  //   return this.http.put(this.configUrl + "users/Ubook/"+id, book);

  
  
  // }

  change(book){
    let b = book.Book_name;
    localStorage.setItem("Book",b);
    console.log(b);
  }
 

    // change(book){
    //   let headers = this.setheaders;
    //   return this.http.post(this.configUrl + "users/Users", book);
  
    
    //   // if (admin.email == "admin@katalyst.com" && admin.password == "1234"){
    //    //this.router.navigate(["main"]);
    //   // }
    // }

 

  


}
