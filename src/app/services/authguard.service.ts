import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  canActivate() {
  
    //Your redirect logic/condition. I use this.
    if (!(localStorage.getItem('userlogin')=="true")){
      alert("Please Login");
      this.router.navigate(['/']);
    }
      return true;
  }

  constructor(private router: Router) { }
}