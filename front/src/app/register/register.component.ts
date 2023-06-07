import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email:any=''
  username:any=''
  password:any=''
  Errormsg:any=''

  constructor(private root:Router,private ds :AuthserviceService) { }

  ngOnInit(): void {
  }

  register(){
    var email=this.email
    var password=this.password
    var username=this.username

    if(email.trim().length===0){
         this.Errormsg="Emasil is required"
    }
    else if(username.trim().length===0){
      this.Errormsg="username required"
 }
    else if(password.trim().length===0){
      this.Errormsg="Password required"
 }
else{

  this.Errormsg=""
  this.ds.register(email,username,password)
  .subscribe((result:any)=>{
    console.log("result",result)
    alert(result.message)
    // localStorage.setItem("currentmail",JSON.stringify(email))
    this.root.navigateByUrl('')

  },(result:any)=>{
    alert(result.error.message)
   })

}
}
   

}



