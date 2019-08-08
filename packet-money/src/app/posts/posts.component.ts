import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { GetpostsService } from '../../services/getposts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(public getPostsService: GetpostsService) { }

  ngOnInit() {
  }
  onClick(post:Post){
    post.toggleContent();
  }
  

}
