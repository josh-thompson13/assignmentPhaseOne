import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  canActivate() {
  
    // Redirect logic/condition.
    if (!(localStorage.getItem('userlogin')=="true")){
      alert("Please Login");
      this.router.navigate(['/']);
    }
      return true;
  }

  constructor(private router: Router) { }
}