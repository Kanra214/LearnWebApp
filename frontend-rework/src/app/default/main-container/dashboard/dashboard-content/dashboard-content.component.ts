import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/core/group.service';
import { Group } from '../../../../models/group';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
