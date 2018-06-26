import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin: any={};
  users : string[] = [];
  constructor( private LoginService:LoginService, private router:Router) { }

  ngOnInit() {
    
  }
  login(){
    this.LoginService.login(this.admin).subscribe(
      data =>{
        var res;
        res = data;
        
       // this.users =this.admin.Username; 
       localStorage.setItem('Username',res.result.Username);
       localStorage.setItem('Name',res.result.Name);
       localStorage.setItem('Address',res.result.Address);
       localStorage.setItem('Mobile',res.result.Mobile);
       localStorage.setItem('AccountBalance',res.result.Account_balance);
       localStorage.setItem('BankName',res.result.Bank_name);
       localStorage.setItem('id',res.result._id);


       

       console.log(res);
       //console.log();
        if(res.result.Username == this.admin.Username && this.admin.Username != null && this.admin.Password != null){
        //console.log(this.users);
        this.router.navigate(["main"]);
        }
        else{
          this.router.navigate([""]);
        }
       
      }
    );

  }
    
  
}
