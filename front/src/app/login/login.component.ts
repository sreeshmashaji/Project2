import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:any="";
  password:any="";
  errorMsg:any=""


  constructor(private ds:AuthserviceService,private root:Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log("haiii")
    var email=this.email
    console.log("username",email);
    
var password=this.password;

if(email.trim().length===0){
  this.errorMsg="Username is required"
}

else if(password.trim().length===0){
  this.errorMsg="Password is required"
}
else{
  this.errorMsg=""

  this.ds.login(email,password)
       .subscribe((result:any)=>{
        console.log("result: ",result);
        
        alert(result.message)
        
       
        localStorage.setItem("currentmail",JSON.stringify(email))
      
        this.root.navigateByUrl('home')
        var  em=(localStorage.getItem('currentmail')||'')
        console.log(em);
        
  
       },(result:any)=>{
        alert(result.error.message)
       })
}




  }

 

}
