import { Component, OnInit, AfterViewInit,ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ChangeDetectorRef, OnChanges, Input, AfterViewChecked  } from '@angular/core';
import { Event } from '@models/event';
import { TimeAndDatePickerComponent } from '../time-and-date-picker/time-and-date-picker.component';
import { EventOverlapService } from '@services/event-overlap.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],

  providers: [EventOverlapService],
})
export class EventFormComponent implements OnInit, AfterViewInit, AfterViewChecked{
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  @Input() group:any;
  pickers: ComponentRef<TimeAndDatePickerComponent>[] = [];
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private eo: EventOverlapService, private changeDetector: ChangeDetectorRef) {

  }
  ngAfterViewChecked(){
    this.changeDetector.detectChanges();

  }
  // this function takes an array of date ranges in this format:
// [{ start: Date, end: Date}]
// the array is first sorted, and then checked for any overlap
ngOnInit():void{
    //   if(this.group){//in /mygroups
    //   for(let event of this.group.events){
    //     const pickerFactory = this.componentFactoryResolver.resolveComponentFactory(TimeAndDatePickerComponent);
    //     const componentRef = this.container.createComponent(pickerFactory);
    //     let form =  componentRef.instance.dtForm;
    //     form.get('eventName').setValue(event.eventName);
    //     form.get('dateTime').setValue(event.dateTime);
    //     this.pickers.push(componentRef);
    //     this.eo.updatePicker(this.pickers);
    //     componentRef.instance.save();
    //   }
    // }
}


  ngAfterViewInit(): void {
    if(this.group){//in /mygroups
      for(let event of this.group.events){
        const pickerFactory = this.componentFactoryResolver.resolveComponentFactory(TimeAndDatePickerComponent);
        const componentRef = this.container.createComponent(pickerFactory);
        let form =  componentRef.instance.dtForm;
        form.get('eventName').setValue(event.eventName);
        form.get('dateTime').setValue(event.dateTime);
        this.pickers.push(componentRef);
        this.eo.updatePicker(this.pickers);
        // componentRef.instance.save();
      }
    }
  }
  get valid():boolean {
    for(let picker of this.pickers){
      if(!picker.instance.valid){
        console.log('not valid');
        return false;

      }
    }

    console.log('valid');
    return true;
  }
  get events(){
    let result = [];
    for(let picker of this.pickers){
      let inst = picker.instance;
      if(inst.valid){
        // result.push(inst.placeholder);
        result.push(inst.dtForm.value);
      }


    }
    return result;
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
