import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-system_role': 'application/json' })
}

const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  system_role = "";
  email = "";
  password = "";


  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  createUser1(email:string, password:string, system_role:string){
    console.log("Email: "+ email);
    console.log("Password: " + password);
    console.log("System Role: " + system_role);
  }

  createUser(email:string, password:string, system_role:string){
   // let params = new HttpParams({fromObject: {'system_role':system_role,'password':password, 'email':email}})
    //this.httpClient.post(BACKEND_URL + '/createuser', {params:params})
    let user = {email: this.email, password: this.password, system_role: this.system_role}
    this.httpClient.post(BACKEND_URL + '/createuser', user, httpOptions )
    .subscribe((data:any)=>{
      // If response
      if(data.userexists){
        alert("User already exists")
        // this.httpClient.post etc.
      } else {
        alert("User created")
      }

    })
  }

}
