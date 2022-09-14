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
    this.route.paramMap.subscribe(
      params=>{this.groupid = params.get('id') ?? "";}
    )
    // console.log(this.groups);
    // console.log(this.groups[1].group_id)
    this.groups.forEach((element: any) => {
      if(element.group_id == this.groupid){
        this.rooms.push(element.rooms)
      }
    });
    console.log(this.rooms[0][2]);
   

  }

}
