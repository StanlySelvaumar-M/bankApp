import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})

export class TransactionsComponent implements OnInit {
  
transactions:any
  acno=JSON.parse(localStorage.getItem("currentAcno")||"")

  constructor(private ds:DataService) {
    this.transactions=this.ds.getTransactions(this.acno)
    console.log(this.transactions);
    
    

   }
   

  ngOnInit(): void {
  }

}
