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
        sessionStorage.setItem('userid', data.userid.toString());
        sessionStorage.setItem('userlogin', data.ok.toString());
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('userbirthdate', data.userbirthdate);
        sessionStorage.setItem('userage', data.userage.toString());
        
        this.router.navigateByUrl("/account");
      } else {
        alert("Invalid credentials")
      }
    })
    
  }

}
