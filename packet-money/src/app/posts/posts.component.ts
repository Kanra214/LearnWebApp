import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postList = [
    {title: "task 1", content: "content 1"},
    {title: "task 2", content: "content 2"},
    {title: "task 3", content: "content 3"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
