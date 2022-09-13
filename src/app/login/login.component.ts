import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private httpClient: HttpClient) { }

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
        sessionStorage.setItem('userlogin', data.ok.toString());

        // Set user id
        sessionStorage.setItem('userid', data.userid.toString());

        // Set username
        sessionStorage.setItem('username', data.username);

        // Set system role
        sessionStorage.setItem('system_role', data.system_role);

        // Set groups
        sessionStorage.setItem('groups', data.groups);

        // View session storage
        //let x = sessionStorage.getItem('groups');
        //alert(x);

        this.router.navigateByUrl("/account");
      } else {
        alert("Invalid credentials")
      }
    })
    
  }

}
