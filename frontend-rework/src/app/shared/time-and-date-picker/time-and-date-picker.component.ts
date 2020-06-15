import { Component, OnInit} from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { EventOverlapService } from '@services/event-overlap.service';
import { Router } from '@angular/router';

// Time slot validate
//1. cant be empty
//2. time slots cant overlap
// from and to must both present
//2. cant be the past
// event name should be bucket

@Component({
  selector: 'app-time-and-date-picker',
  templateUrl: './time-and-date-picker.component.html',
  styleUrls: ['./time-and-date-picker.component.css']
})
export class TimeAndDatePickerComponent implements OnInit {
  closed:boolean = false;
  edit: boolean = true;
  placeholder:string;
  min: Date;
  dtForm;
  overlap:boolean = false;
  duplicateEventName:boolean = false;
  isMyGroups: boolean = this.router.isActive('/mygroups', true)
  constructor(private fb: FormBuilder, private eo: EventOverlapService, private router: Router) { 
    this.dtForm = this.fb.group({
      "eventName": ['', Validators.required],
      "dateTime": ['', [this.mustHaveFromAndTo]]
    }, 
    );
  }
  get eventPassed():boolean {
    return this.dtForm.get('dateTime').value[1] < new Date();
  }
  get valid():boolean{

    return this.dtForm.valid && !this.overlap && !this.edit
  }
  mustHaveFromAndTo(dateTimeFormControl: FormControl): ValidationErrors | null{
    const dateArr: Date[] = dateTimeFormControl.value;
    if(!dateArr[0]){
      return {noFrom:true};
    }
    if(!dateArr[1]){

      return {noTo:true};
    }
    return null;

  }
// @Output() closePicker= new EventEmitter();

  ngOnInit(): void {
    let current = new Date();
    if(this.isMyGroups){
      //take min of old value and current time. if no old value(a new picker) then take current time
      if(this.dtForm.get('dateTime').value.length > 1){
        let startTime = new Date(this.dtForm.get('dateTime').value[0]);
        if(current > startTime){
          this.min = startTime;
        }
        else{
          this.min = current;
        }
      }
    } 
      else{
        this.min = current;
      }
    
    
  }
  close(){
    // this.closePicker.emit(this);
    this.closed = true;
  }
  save(){

    const eventNameValue = this.dtForm.controls['eventName'].value;
    const dateTimeValue = this.dtForm.controls['dateTime'].value;
    this.eo.checkOverlap().subscribe(result =>{
      if(result.overlap){//overlap is true
        this.overlap = true;
      }
      else{
        this.overlap = false;
        this.eo.checkEventNameDuplicate().subscribe(result=> {
          if(result.duplicateEventName){
            this.duplicateEventName = true;
          }
          else{
            this.duplicateEventName = false;
            this.placeholder = "Event name: " + eventNameValue + "; Time: " + dateTimeValue[0].toLocaleString() +  " ~ " + dateTimeValue[1].toLocaleString();
            this.edit = false;
          }
        });
        
      }
    });

    
  }

}
