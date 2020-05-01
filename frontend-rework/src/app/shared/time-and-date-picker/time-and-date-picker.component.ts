import { Component, OnInit, ViewChild, ElementRef, ComponentRef} from '@angular/core';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY } from '@angular/cdk/overlay/overlay-directives';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-time-and-date-picker',
  templateUrl: './time-and-date-picker.component.html',
  styleUrls: ['./time-and-date-picker.component.css']
})
export class TimeAndDatePickerComponent implements OnInit {
  closed:boolean = false;
  edit: boolean = true;
  dt:any;//TODO: type
  placeholder:string;
  constructor() { }
// @Output() closePicker= new EventEmitter();

  ngOnInit(): void {
  }
  close(){
    // this.closePicker.emit(this);
    console.log("emiteed")
    this.closed = true;
  }
  save(eventName, dt){
    this.dt = dt;
    this.placeholder = "Event name: " + eventName.value + "; Time: " + dt._selecteds[0].toString() + " ~ " + dt._selecteds[1].toString();
    this.edit = false;
  }
  show(dt){
    console.log(dt);
  }

}
