import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  acno=""
  pswd=""

  // form group
  registerForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:[''],
    pwsd:['']
    
  })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
   register(){
    console.log(this.registerForm.value.uname);
    
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pwsd

    if(this.registerForm.get('uname')?.errors){
      alert("Invalid Username")
    }
    



    if(this.registerForm.valid){
      const result=this.ds.register(uname,acno,pswd)

      if(result){
        alert ("successfully registered")
       this.router.navigateByUrl("")
      }
      else{
        alert("already Existing Customer....Please Login!!!!")
      }
    }

    else{
      alert("Invalid Form")
    }

    
   }
}
