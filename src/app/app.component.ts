import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatappphaseone';
  userlogin = localStorage.getItem('userlogin') ?? null
  system_role = localStorage.getItem('system_role') ?? null


  constructor(private router:Router){}

  logout(){
      localStorage.clear();
      this.userlogin
      this.router.navigateByUrl('/')
  }

}




