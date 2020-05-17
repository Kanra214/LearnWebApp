import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-groupdetail',
  templateUrl: './groupdetail.component.html',
  styleUrls: ['./groupdetail.component.css']
})
export class GroupdetailComponent implements OnInit {

  @Input() group:any;//TODO: change to group interface
  constructor() { }

  ngOnInit(): void {
  }

}
