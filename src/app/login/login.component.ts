import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const BACKEND_URL = 'http://localhost:3000';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  x = "";
  login = this.navbar.userlogin

  constructor(private router: Router, private httpClient: HttpClient, private navbar: AppComponent) { }

  ngOnInit(): void {
  }

  loginServer(){
    let user = {username: this.email, pwd: this.password};
    this.httpClient.post(BACKEND_URL + '/login', user, httpOptions)
    .subscribe((data:any)=>{
      alert("Posting: " +JSON.stringify(user));
      alert("Post response: "+JSON.stringify(data));
      // If the ok attribute is set to true run:
      if(data.ok){
        alert("Valid Credentials");
        // Set user to be logged in
        localStorage.setItem('userlogin', data.ok.toString());

        // Set user id
        localStorage.setItem('userid', data.userid.toString());

        // Set username
        localStorage.setItem('username', data.username);

        // Set system role
        localStorage.setItem('system_role', data.system_role);

        // Set groups
        localStorage.setItem('groups', JSON.stringify( data.groups));

        // View session storage
        let x = localStorage.getItem('userlogin');
        alert(x);

        // Refresh the navbar so login appears and then route to /groups
        this.navbar.userlogin = "true";
        this.navbar.system_role = localStorage.getItem('system_role')
        this.router.navigateByUrl("/groups");
      } else {
        alert("Invalid credentials")
      }
    })
    
  }

}
