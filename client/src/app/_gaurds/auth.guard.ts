import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';




@Injectable({
  providedIn:'root'
})
export class authGuard implements CanActivate {
  constructor(private accountServices:AccountService,private toastr:ToastrService){}
  canActivate():
     Observable<boolean > {
       return this.accountServices.currentUser$.pipe(
        map(user=>{
          if (user) return true
          else{
            this.toastr.error('You shall not pass');
            return false
          }
        })
       )
     }
}
