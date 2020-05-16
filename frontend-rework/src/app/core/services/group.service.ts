import { Injectable } from '@angular/core';
import { Group } from '@models/group';
import { HttpClient, HttpParams } from '@angular/common/http';
import { api } from '@api';
import { ResourceService } from './resource.service';
import { of, Observable, BehaviorSubject, Subject } from 'rxjs';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY } from '@angular/cdk/overlay/overlay-directives';

@Injectable({
  providedIn: 'root'
})
export class GroupService extends ResourceService {

  private _maximumCapacity: Number = 8;

  // results: Group[];

  resultsChange: Subject<Group[]> = new Subject<Group[]>();
  results:Group[];
  constructor(http: HttpClient) { 
    super(api.group, http);
    this.resultsChange.subscribe((value) => {
      this.results = value;
  });
  }
  // onResults():Observable<Group[]> {
  //   console.log('onresult');
  //   return of(this.results);
  // }
  search(queryObj){
    let temp = [];
    super.get(queryObj).subscribe(
      response => {
        const resArr = response as Group[];
        for(let group of resArr){  
          temp.push(new Group(group));
      }
      this.resultsChange.next(temp);

   
    });
  }
  // onResults() {
  //   console.log('onresult');
  //   return this.resultsSource.asObservable();
  // }
  // search(queryObj){
  //   let result = super.get(queryObj)
  //   this.resultsSource.next(result);
  // }


  get maximumCapacity(){
    return this._maximumCapacity;
  }

  
  
}
