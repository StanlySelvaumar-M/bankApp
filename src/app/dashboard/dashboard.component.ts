import { Component, OnInit } from '@angular/core';
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


  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  deposit() {
    var acno=this.acno
    var pswd=this.pwsd
    var Amount=this.Amount

    const result=this.ds.deposit(acno,pswd,Amount)
    if(result){
      alert(Amount+" deposited successfully and new balance is: "+result)
    }

  }
  withdraw() {
    var acno1=this.acno1
    var pswd1=this.pwsd1
    var Amount1=this.Amount1

    const result=this.ds.withdraw(acno1,pswd1,Amount1)
    if(result){
      alert(Amount1+" debited successfully and new balance is: "+result)
    }
  }
}
