import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const BACKEND_URL = 'http://localhost:3000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:string[] = [];

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    // Get all users
    this.getUsers()
  }

  async getUsers(){
    await this.httpClient.get(BACKEND_URL + '/users',httpOptions)
    .subscribe((data:any)=>{
      // Initially data comes back as JSON object
      alert("List of users in string form: " + JSON.stringify(data))
      data.forEach((element: any) => {
        this.users.push(element.username.toString())
      });
    })
  }

}
