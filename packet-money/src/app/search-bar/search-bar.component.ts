import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetpostsService } from '../../services/getposts.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  categoryList = [
    "car washing",
    "coffee holding",
    "tutoring",
    "dog walking",
    "delivery",
    
  ];


  locationList = [
    "Downtown Montreal",
    "Laval",
    "Longueuil",
    "South Shore"
  ];

  onSubmit(f:NgForm){
    console.log(f);
    this.getPostsService.getPosts(f.value).subscribe(res =>{
      console.log("got response: ", res);
      let temp = [];
      const resArr = res as Post[];
      for(let post of resArr){  
        temp.push(new Post(post));
      }
      this.getPostsService.posts = temp;

   
    });;
    
    
  }

  constructor(private getPostsService: GetpostsService) { }

  ngOnInit() {
    
  }


}
