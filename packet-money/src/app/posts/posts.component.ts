import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postList = [
    new Post("Bubble tea delivery", "Can you deliver an iced large black suger milk tea from ABS to the entry of 1411 du Fort before this 4pm?", 10),
    new Post("Package pick up", "Pick up my package from canada post", 15),
    new Post("Type c charger", "anyone near H building has type c charger? i need it for 2 hrs", 10),
  ];
  constructor() { }

  ngOnInit() {
  }
  onClick(post:Post){
    post.toggleContent();
  }
  

}
