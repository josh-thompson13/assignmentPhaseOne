import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  username = "";
  email = "";
  password = "123";


  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }


  createUser(username:string, email:string){
    let params = new HttpParams({fromObject: {'username':username, 'email':email}})
    this.httpClient.get(BACKEND_URL + '/createuser', {params:params})
    .subscribe((data:any)=>{
      // If response 
      if(data.ok){
        alert("Creating user")
        // this.httpClient.post etc.
      } else {
        alert("User already exists or you have not entered all fields")
      }
      
    })
  }

}
