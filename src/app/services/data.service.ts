import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno:any

  //database

  db: any = {
    1000: { "acno": 1000, "username": "'STAN'", "password": 1000, "balance": 5000,transactions:[] },
    1001: { "acno": 1001, "username": "'ASHMI'", "password": 1001, "balance": 5000 ,transactions:[]},
    1002: { "acno": 1002, "username": "SHANU", "password": 1002, "balance": 3000 ,transactions:[]}
  }

  constructor() {
    this.getDetails()
  }

  // get details from localstorage
  getDetails(){
    if(localStorage.getItem("database")){
      this.db=JSON.parse(localStorage.getItem("database")||"")
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")||"")
    }
    if(localStorage.getItem("currentAcno")){
      this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")||"")
    }
  }


  // saveDetails()
  saveDetails(){
    if(this.db){
      localStorage.setItem("database",JSON.stringify(this.db))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }
  }

  login(acno: any, pswd: any) {

    let db = this.db

    if (acno in db) {
      if (pswd == db[acno]["password"]) {
        this.currentUser=db[acno]["username"]
        this.currentAcno=acno
        this.saveDetails()
        return true
      }
      else {
        alert("Incorrect Password")
        return false
      }
    }
    else {
      alert("user does not exist")
      return false
    }
  }

  // register
  register(username: any, acno: any, password: any) {
    let db = this.db

    if (acno in db) {
      return false
    }
    else {
      // insert in db
      db[acno] = {
        acno,
        username,
        password,
        "balance": 0,
        transactions:[]
      }
      console.log(db);
      this.saveDetails()

      return true
    }

  }

  // deposit
  deposit(acno: any, password: any, amt: any) {


    var amount = parseInt(amt)
    let db = this.db
    if (acno in db) {

      if (password == db[acno]["password"]) {

        db[acno]["balance"] +=amount
        db[acno].transactions.push({
          type:"CREDIT",
          Amount:amount
        })
        console.log(db);
        this.saveDetails()
        return db[acno]["balance"]
      }
      else {
        alert("Incorrect password")
        return false
      }


    }
    else {
      alert("user does not Exist.....")
      return false
    }
  }

  // withdraw
  withdraw(acno: any, password: any, amt: any) {


    var amount = parseInt(amt)
    let db = this.db
    if (acno in db) {

      if (password == db[acno]["password"]) {

        if (db[acno]["balance"]>amount) {
          db[acno]["balance"] -=amount
          db[acno].transactions.push({
            type:"DEBIT",
            Amount:amount
          })
          console.log(db);
          this.saveDetails()
          return db[acno]["balance"]
        }
        else{
          alert("Insufficient Balance")
          return false
        }

      }
      else {
        alert("Incorrect password")
        return false
      }


    }
    else {
      alert("user does not Exist.....")
      return false
    }
  }
  
  getTransactions(acno:any){
    console.log(this.db[acno].transactions);
    
    return this.db[acno].transactions;
    

  }
}
