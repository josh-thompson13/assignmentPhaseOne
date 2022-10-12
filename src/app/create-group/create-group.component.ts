import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { group } from '@angular/animations';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  groupName = "";
  groupId = "";


  constructor(private router: Router, private httpClient: HttpClient) { }



  ngOnInit(): void {
  }

  createGroup(groupName: string, groupId: string){
    let group = {group_name: groupName, group_id: groupId};
  }

}
