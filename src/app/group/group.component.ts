import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  groupid="";
  groups = JSON.parse(localStorage.getItem('groups') ?? "[]");
  rooms: string[] = [];


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // Get the group id user you have selected
    this.route.paramMap.subscribe(
      params=>{this.groupid = params.get('id') ?? "";}
    )

    // For each of the the user has access too, check
    // the group id of each one for a match
    this.groups.forEach((element: any) => {
      if(element.group_id == this.groupid){
        element.rooms.forEach((elementum: any) => {
          this.rooms.push(elementum.room_name);
        });
      }
    });
  }
}
