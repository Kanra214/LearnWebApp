import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.css']
})
export class MessagelistComponent implements OnInit {
messagelist = [
  {
    from: 'user1',
    content: 'hfoijsfoiahesihdgfoasljwoieghfowifjolwkesjwef',
    read: false,

  },
  {
    from: 'user2',
    content: 'sgkfjwpoirjpwojepofjwpeifojqepwihewefwnoeifw',
    read:true,
  }

];
  constructor() { }

  ngOnInit(): void {
  }

}
