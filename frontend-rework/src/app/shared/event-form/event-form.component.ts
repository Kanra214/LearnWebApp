import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ChangeDetectorRef, AfterViewInit, OnChanges } from '@angular/core';
import { Event } from '@models/event';
import { TimeAndDatePickerComponent } from '../time-and-date-picker/time-and-date-picker.component';
import { EventOverlapService } from '@services/event-overlap.service';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit{
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  
  events: Event[];
  pickers: ComponentRef<TimeAndDatePickerComponent>[] = [];
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private eo: EventOverlapService) {}
  // this function takes an array of date ranges in this format:
// [{ start: Date, end: Date}]
// the array is first sorted, and then checked for any overlap



  ngOnInit(): void {
  }
  change(){
    for(let picker of this.pickers){
      if(picker.instance.closed){
        this.removePicker(picker);
      }
    }
  }
  addPicker(){
    const pickerFactory = this.componentFactoryResolver.resolveComponentFactory(TimeAndDatePickerComponent);
    const componentRef = this.container.createComponent(pickerFactory);
    this.pickers.push(componentRef);
    this.eo.updatePicker(this.pickers);
  }
  
  removePicker(componentRef: ComponentRef<TimeAndDatePickerComponent>){
    const componentRefIndex = this.pickers.indexOf(componentRef);
    if(componentRefIndex != -1){
      this.pickers.splice(componentRefIndex, 1);
      this.container.remove(this.container.indexOf(componentRef.hostView));
    }
    this.eo.updatePicker(this.pickers);
  }

}
