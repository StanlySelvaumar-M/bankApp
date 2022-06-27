import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno = ""
  pwsd = ""
  Amount = ""

  acno1 = ""
  pwsd1 = ""
  Amount1 = ""

  // form group
  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pwsd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    Amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  })

  withdrawForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pwsd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    Amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  })
  user: any
  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
    this.user = this.ds.currentUser
  }



  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert("please Log In")
      this.router.navigateByUrl("")

    }
  }

  deposit() {
    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.pwsd
    var Amount = this.depositForm.value.Amount


    if (this.depositForm.valid) {
      const result = this.ds.deposit(acno, pswd, Amount)
      if (result) {
        alert(Amount + " deposited successfully and new balance is: " + result)
      }
    }
    else {
      alert("Invalid amount")
    }


  }
  withdraw() {
    var acno1 = this.withdrawForm.value.acno1
    var pwsd1 = this.withdrawForm.value.pwsd1
    var Amount1 = this.withdrawForm.value.Amount1


    if (this.withdrawForm.valid) {
      const result = this.ds.withdraw(acno1, pwsd1, Amount1)
      if (result) {
        alert(Amount1 + " debited successfully and new balance is: " + result)
      }
    }
    else {
      alert("Invalid amount")
    }

  }

  logout() {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }
}
