import { Component, OnInit } from '@angular/core';
import { Group } from '../../models/group';
import { GroupService } from 'src/app/core/group.service';

@Component({
  selector: 'app-grouplistview',
  templateUrl: './grouplistview.component.html',
  styleUrls: ['./grouplistview.component.css']
})
export class GrouplistviewComponent implements OnInit {
  // groups: Group[];
  groups = [
    new Group({
  'university':'Concordia', 'subject': 'COMP 5231', 'introduction': 'sdjfoisdjfosidjsdfsdfsfsdgsfgjsherfigjeorgiejrgoeirghjsortghslegjreslkrjglekrjgefosidfjosidjfosdighosdijf', 
  'events':[{name:'event1'},{name: 'event2'}], 
  inProgress: true,
  members : ['111', '222', '333'],
  capacity : 3,
  isFull : true,



}),
new Group({
  'university':'Concordia', 'subject': 'COMP 5231', 'introduction': 'sdjfoisdjfosidjsdfsdfsfsdgsfgjsherfigjeorgiejrgoeirghjsortghslegjreslkrjglekrjgefosidfjosidjfosdighosdijf', 
  'events':[{name:'event1'},{name: 'event2'}], 
  inProgress: false,
  members : ['aaa', 'bbb', 'ccc'],
  capacity : 10,
  isFull : false,



}),
]
  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
  //  this.groupService.onResults().subscribe(results => {
  //    this.groups = results;
  //  });
  }

}
