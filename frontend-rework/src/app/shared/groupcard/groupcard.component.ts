import { Component, OnInit, Input } from '@angular/core';
import { Group } from 'src/app/models/group';

@Component({
  selector: 'app-groupcard',
  templateUrl: './groupcard.component.html',
  styleUrls: ['./groupcard.component.css']
})
export class GroupcardComponent implements OnInit {
  @Input() group:any;
  constructor() { }

  ngOnInit(): void {
  }

}
