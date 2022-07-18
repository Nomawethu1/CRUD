import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  storedUser = false;
  
  constructor() { }

  ngOnInit(): void {
    this.checkUser()
  }

  onLogout(){   
  }  



  checkUser(){
    var user = window.localStorage.getItem('user');
console.log(user);
     
    if (user != null) {
     this.storedUser = true;
     console.log("there is a user in local storage");
    }
    else{
     console.log("no user in local storage");
     
    }
  }
  
}