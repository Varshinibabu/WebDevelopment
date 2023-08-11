import { Component,OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  model:any={};
  user:User={
    username: '',
    token: ''
  };
username='';
  currentUser$:Observable<User | null> = of(null);
  constructor(public accountservices:AccountService,private router:Router,
    private toastr:ToastrService)
    {
      const userstring=localStorage.getItem('user');
      if(!userstring) return;
      this.user=JSON.parse(userstring); 
    }
  ngOnInit(): void {
  
   
  }
 
  login(){
    
    console.log(this.model);
      this.accountservices.login(this.model).subscribe({
        next:_=>this.router.navigateByUrl('/members'),
         
      error:error=>{
        this.toastr.error(error.error)
        console.log(error)
      }
      })
  }
  logout(){
    this.accountservices.logout()
    this.router.navigateByUrl('/')
  }
  
}
