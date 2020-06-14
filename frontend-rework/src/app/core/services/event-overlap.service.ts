import { Injectable, ComponentRef } from '@angular/core';
import { TimeAndDatePickerComponent } from '@shared/time-and-date-picker/time-and-date-picker.component';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
@Injectable({
  providedIn: 'root'
})
export class EventOverlapService {
  private pickers:ComponentRef<TimeAndDatePickerComponent>[];
  constructor() { }
  updatePicker(updatedPickers: ComponentRef<TimeAndDatePickerComponent>[]): void{
    this.pickers = updatedPickers;

  }
  checkEventNameDuplicate():Observable<any>{
    const eventNames = this.pickers.map((picker)=> {
      return picker.instance.dtForm.controls['eventName'].value;
    });
    let result = {duplicateEventName: new Set(eventNames).size !== eventNames.length}
    return Observable.of(result);
  }
  checkOverlap(): Observable<any>{
    const dateRanges = this.pickers.map((picker) => {
      return picker.instance.dtForm.controls['dateTime'].value;
    });
    var sortedRanges = dateRanges.sort((previous, current) => {
    
      // get the start date from previous and current
      var previousTime = previous[0].getTime();
      var currentTime = current[1].getTime();
  
      // if the previous is earlier than the current
      if (previousTime < currentTime) {
        return -1;
      }
  
      // if the previous time is the same as the current time
      if (previousTime === currentTime) {
        return 0;
      }
  
      // if the previous time is later than the current time
      return 1;
    });
    
    var result = sortedRanges.reduce((result, current, idx, arr) => {
      // get the previous range
      if (idx === 0) { return result; }
      var previous = arr[idx-1];
    
      // check for any overlap
      var previousEnd = previous[1].getTime();
      var currentStart = current[0].getTime();
      var overlap = (previousEnd >= currentStart);
    
      // store the result
      if (overlap) {
        // yes, there is overlap
        result.overlap = true;
        // store the specific ranges that overlap
        result.ranges.push({
          previous: previous,
          current: current
        })
      }
     
      return result;
     
       // seed the reduce  
    }, {overlap: false, ranges: []});
  
  
    // return the final results  
    return Observable.of(result);
  }
}
