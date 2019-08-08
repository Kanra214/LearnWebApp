import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetpostsService {
  posts: Post[];
  url:string = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }
  getPosts(queryObj){
    const params = new HttpParams({fromObject: queryObj});
    this.http.get(this.url, {params}).subscribe(res =>{
      console.log("got response: ", res);
      let temp = [];
      const resArr = res as Post[];
      for(let post of resArr){  
        temp.push(new Post(post));
      }
      this.posts = temp;

   
    });
  }
  
  
}
