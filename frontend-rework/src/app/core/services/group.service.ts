import { Injectable } from '@angular/core';
import { Group } from '@models/group';
import { HttpClient, HttpParams } from '@angular/common/http';
import { api } from '@api';
import { ResourceService } from './resource.service';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService extends ResourceService {

  results: Group[];
  private _maximumCapacity: Number = 8;
  constructor(http: HttpClient) { 
    super(api.group, http);
  }
  onResults():Observable<Group[]> {
    return of(this.results);
  }
  search(queryObj){
    this.results = [];
    super.get(queryObj).subscribe(
      response => {
        const resArr = response as Group[];
        for(let group of resArr){  
          this.results.push(new Group(group));
      }

   
    });
  }

  get maximumCapacity(){
    return this._maximumCapacity;
  }

  
  
}
