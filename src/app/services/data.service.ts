import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //database

  db: any = {
    1000: { "acno": 1000, "username": "stan", "password": 1000, "balance": 5000 },
    1001: { "acno": 1001, "username": "ashmi", "password": 1001, "balance": 5000 },
    1002: { "acno": 1002, "username": "shanu", "password": 1002, "balance": 3000 }
  }

  constructor() { }

  login(acno: any, pswd: any) {

    let db = this.db

    if (acno in db) {
      if (pswd == db[acno]["password"]) {
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
        "balance": 0
      }
      console.log(db);

      return true
    }

  }

  // deposit
  deposit(acno: any, password: any, amt: any) {


    var Amount = parseInt(amt)
    let db = this.db
    if (acno in db) {

      if (password == db[acno]["password"]) {

        db[acno]["balance"] += Amount
        console.log(db);
        
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


    var Amount = parseInt(amt)
    let db = this.db
    if (acno in db) {

      if (password == db[acno]["password"]) {

        if (db[acno]["balance"]>Amount) {
          db[acno]["balance"] -= Amount
          console.log(db);
          
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
}
