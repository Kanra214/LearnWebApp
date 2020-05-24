import { Component, OnInit } from '@angular/core';
import { Group } from '../../models/group';
import { GroupService } from '@services/group.service';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-grouplistview',
  templateUrl: './grouplistview.component.html',
  styleUrls: ['./grouplistview.component.css']
})
export class GrouplistviewComponent implements OnInit {
  // groups: Group[];
//   groups: Group[] = [
//     {
//   'university':'Concordia', 'subject': 'COMP 5231', 'introduction': 'sdjfoisdjfosidjsdfsdfsfsdgsfgjsherfigjeorgiejrgoeirghjsortghslegjreslkrjglekrjgefosidfjosidjfosdighosdijf', 
//   'events':[{name:'event1'},{name: 'event2'}], 
//   inProgress: true,
//   members : ['111', '781784310@qq.com', '333'],
//   capacity : 3,
//   isFull : true,



// } as Group,
// {
//   'university':'Concordia', 'subject': 'COMP 5231', 'introduction': 'sdjfoisdjfosidjsdfsdfsfsdgsfgjsherfigjeorgiejrgoeirghjsortghslegjreslkrjglekrjgefosidfjosidjfosdighosdijf', 
//   'events':[{name:'event1'},{name: 'event2'}], 
//   inProgress: false,
//   members : ['aaa', 'bbb', 'ccc'],
//   capacity : 10,
//   isFull : false,



// },
// {
//   'university':'Concordia', 'subject': 'COMP 5231', 'introduction': 'sdjfoisdjfosidjsdfsdfsfsdgsfgjsherfigjeorgiejrgoeirghjsortghslegjreslkrjglekrjgefosidfjosidjfosdighosdijf', 
//   'events':[{name:'event1'},{name: 'event2'}], 
//   inProgress: false,
//   members : ['aaa', 'bbb', 'ccc'],
//   capacity : 10,
//   isFull : false,



// },
// {
//   'university':'Concordia', 'subject': 'COMP 5231', 'introduction': 'sdjfoisdjfosidjsdfsdfsfsdgsfgjsherfigjeorgiejrgoeirghjsortghslegjreslkrjglekrjgefosidfjosidjfosdighosdijf', 
//   'events':[{name:'event1'},{name: 'event2'}], 
//   inProgress: false,
//   members : ['aaa', 'bbb', 'ccc'],
//   capacity : 10,
//   isFull : false,



// },
// {
//   'university':'Concordia', 'subject': 'COMP 5231', 'introduction': 'sdjfoisdjfosidjsdfsdfsfsdgsfgjsherfigjeorgiejrgoeirghjsortghslegjreslkrjglekrjgefosidfjosidjfosdighosdijf', 
//   'events':[{name:'event1'},{name: 'event2'}], 
//   inProgress: false,
//   members : ['aaa', 'bbb', 'ccc'],
//   capacity : 10,
//   isFull : false,



// },
// {
//   'university':'Concordia', 'subject': 'COMP 5231', 'introduction': 'sdjfoisdjfosidjsdfsdfsfsdgsfgjsherfigjeorgiejrgoeirghjsortghslegjreslkrjglekrjgefosidfjosidjfosdighosdijf', 
//   'events':[{name:'event1'},{name: 'event2'}], 
//   inProgress: false,
//   members : ['aaa', 'bbb', 'ccc'],
//   capacity : 10,
//   isFull : false,



// },
// new Group({
//   'university':'Concordia', 'subject': 'COMP 5231', 'introduction': 'sdjfoisdjfosidjsdfsdfsfsdgsfgjsherfigjeorgiejrgoeirghjsortghslegjreslkrjglekrjgefosidfjosidjfosdighosdijf', 
//   'events':[{name:'event1'},{name: 'event2'}], 
//   inProgress: false,
//   members : ['aaa', 'bbb', 'ccc'],
//   capacity : 10,
//   isFull : false,



// }),
// ]
// groups: Group[];
pageOfItems: Group[];
public config: PerfectScrollbarConfigInterface = {};
  constructor(private groupService: GroupService) { 
  }
  get groups(){
    return this.groupService.searchResults;
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  ngOnInit(): void {
    
   
  }
}
