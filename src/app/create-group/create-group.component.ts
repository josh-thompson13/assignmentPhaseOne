import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-system_role': 'application/json' })
}

const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  groupName = "";
  groupId = "";
  BACKEND_URL = "localhost:3000"


  constructor(private router: Router, private httpClient: HttpClient) { }



  ngOnInit(): void {
  }

  createGroup(groupName: string, groupId: string){
    let group = {group_name: groupName, group_id: groupId};
    this.httpClient.post(BACKEND_URL + "/creategroup", group, httpOptions)
    .subscribe((data:any)=>{

    })
  }

}
