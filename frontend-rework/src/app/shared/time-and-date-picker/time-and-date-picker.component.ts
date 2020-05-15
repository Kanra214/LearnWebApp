import { Component, OnInit} from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { EventOverlapService } from '@services/event-overlap.service';

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
  constructor(private fb: FormBuilder, private eo: EventOverlapService) { 
    this.dtForm = this.fb.group({
      "eventName": ['', Validators.required],
      "dateTime": ['', [this.mustHaveFromAndTo]]
    }, 
    );
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

      console.log("false");
      return {noTo:true};
    }
    return null;

  }
// @Output() closePicker= new EventEmitter();

  ngOnInit(): void {
    this.min = new Date();
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
        this.placeholder = "Event name: " + eventNameValue + "; Time: " + dateTimeValue[0].toLocaleString() +  " ~ " + dateTimeValue[1].toLocaleString();
        this.edit = false;
      }
    });

    
  }

}
