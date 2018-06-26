import { Component, OnInit } from '@angular/core';
import {MainService} from './main.service';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';
import {LoginComponent} from '../login/login.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { concat } from 'rxjs';
declare var $: any;


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers : [LoginService]
})
export class MainComponent implements OnInit {
 
  books : string[] =[];
  book : any={};
  users : string[] =[];
  user1: any={};
  a : any={};
  c : number = 0;

  
 

  // book: any={};
  // users1 : string[] = [];

  

  constructor(private Mainservice:MainService,private router:Router, private Http:HttpClient) { }
get user(): any {
    return localStorage.getItem('Username');
}
get name(): any {
  return localStorage.getItem('Name');
}
get address(): any {
  return localStorage.getItem('Address');
}
get mobile(): any {
  return localStorage.getItem('Mobile');
}
get book1(): any {
  return localStorage.getItem('book');
}
get date1(): any{
  return localStorage.getItem('date');
}
get date2(): any{
  return localStorage.getItem('dates');
}
get balance(): any{
  return localStorage.getItem('AccountBalance');
}
get bank(): any{
  return localStorage.getItem('BankName');
}




  ngOnInit() {
    this.Mainservice.getbooks().subscribe(
      data =>{
        var res;
        res = data;
        //console.log(res);
        this.books = res.result;
       // this.router.navigate(["main"]);
      }

    )


   
    
    
  }
  change(book)
  {
    alert("Your Book will be Delivered in 6 Days");
   
    let b = book.Book_name;
    console.log(b);
   //const  prevBook = localStorage.getItem('book');
 
   // localStorage.setItem("book",`${b}, ${prevBook}`);
   localStorage.setItem("book",b);
   var today = new Date();
   console.log(today);
   localStorage.setItem("date",today.toString());

   var someDate = new Date();
   var numberOfDaysToAdd = 6;
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
  // var myDate =  today.setDate(today.getDate()+7);
  var dd = someDate.getDate();
  var mm = someDate.getMonth() + 1;
  var y = someDate.getFullYear();
  
  var someFormattedDate = dd + '/'+ mm + '/'+ y;
  console.log(someFormattedDate);
  localStorage.setItem("dates",someFormattedDate.toString());

   
   //console.log(myDate.toString());
//console.log(myDate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
//console.log(myDate.toUTCString());
   

  }

  addMoney(user1){
    
   this.a = user1.amount;
   this.c = +this.balance + +this.a;
   console.log(this.c);

   
   
  }

// change(book){
//   this.Mainservice.Change({Ordered_Book:book.Book_name}).subscribe(
//     data =>{
//       var res;
//       res = data;
//       console.log(res);
//     })

// }


  // change1(){
  //   var today = new Date();
  //   console.log(today);
  // }
 
  // change(){
  //   this.Mainservice.change(this.book).subscribe(
  //     data =>{
  //       var res;
  //       res = data;
  //       this.users1.push(res);
  //       console.log(this.users1);
  //     })
    
  // }

}
