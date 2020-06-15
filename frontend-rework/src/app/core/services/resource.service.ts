import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

export class ResourceService {

  constructor(private url: string, private http: HttpClient) { }
  
  get(queryObj) {
    const params = new HttpParams({fromObject: queryObj});
    return this.http.get(this.url, {params: params});
  }
  create(requestBody) {
    // console.log('group: ', requestBody);
    return this.http.post(this.url, requestBody,  {observe: 'response'});
  }
  update(requestBody) {
    return this.http.put(this.url, requestBody, {observe: 'response'});
  }
}
