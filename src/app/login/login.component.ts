import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//properties
aim="Perfect Banking Partner"
accno="acc no please"
acno=""
pwsd="" 



  // dependency Injection

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
//userdefined function

acnoChange(event:any){
  this.acno=event.target.value
  console.log(this.acno);
  
}

pwsdChange(event:any){
  this.pwsd=event.target.value
  console.log(this.pwsd);
  
}
  
// two way

login(){
  var acno=this.acno
  var pswd=this.pwsd
  
 const result=this.ds.login(acno,pswd)

  if(result){
    
      alert("login successful")
      this.router.navigateByUrl('dashboard')
    }
     
  }

// template referencing variable

// login(a:any,p:any){
//   console.log(a.value);
  
//     var acno=a.value
//     var pswd=p.value
//     let db=this.db
  
//     if(acno in db){
//       if(pswd==db[acno]["password"]){
//         alert("login successful")
//       }
//       else{
//         alert("Incorrect Password")
//       }
//      }
//      else{
//       alert("user does not exist")
//     }
//   }

}

