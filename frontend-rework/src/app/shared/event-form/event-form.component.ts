import { Component, OnInit } from '@angular/core';
import { Event } from '@models/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  showPicker: boolean = false;
  events: Event[];
  
  constructor() { }

  ngOnInit(): void {
  }
  togglePicker(){
    this.showPicker = !this.showPicker;
  }

}
