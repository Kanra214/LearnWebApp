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
  members : ['1', '2', '3'],
  capacity : 10


}),
new Group({
  'university':'Concordia', 'subject': 'COMP 5231', 'introduction': 'sdjfoisdjfosidjsdfsdfsfsdgsfgjsherfigjeorgiejrgoeirghjsortghslegjreslkrjglekrjgefosidfjosidjfosdighosdijf', 
  'events':[{name:'event1'},{name: 'event2'}], 
  inProgress: true,
  members : ['1', '2', '3'],
  capacity : 10


}),
]
  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
  //  this.groupService.onResults().subscribe(results => {
  //    this.groups = results;
  //  });
  }

}
