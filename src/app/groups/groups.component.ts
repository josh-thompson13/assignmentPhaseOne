import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {



  userlogin = localStorage.getItem('userlogin')
  userid = localStorage.getItem('userid')
  username = localStorage.getItem('username')
  system_role = localStorage.getItem('system_role')
  groups = JSON.parse(localStorage.getItem('groups') ?? "[]")


  constructor(private router: Router, private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  joinGroup(id:string){
    this.router.navigateByUrl('/group/'+id)
    console.log(id);
  }

  createGroup(){
    this.router.navigateByUrl('creategroup');
  }

}
