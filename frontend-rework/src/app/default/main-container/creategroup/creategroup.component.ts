import { Component, OnInit } from '@angular/core';
import { GroupService } from '@services/group.service';

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css']
})
export class CreategroupComponent implements OnInit {

  constructor(public groupService: GroupService) { }

  ngOnInit(): void {
  }

}
