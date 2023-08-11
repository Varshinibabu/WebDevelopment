
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dating App';
 
 
  constructor(private accountServices:AccountService){  }  
  ngOnInit(): void {
    this.setCurrentUser();
}



  setCurrentUser(){
    debugger;
    const userstring=localStorage.getItem('user');
    if(!userstring) return;
    const user:User=JSON.parse(userstring);
    this.accountServices.setCurrentUser(user);
    
  }
 
}
