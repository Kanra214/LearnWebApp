import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GetpostsService } from '../../services/getposts.service';

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
    "dog walking"
  ];


  locationList = [
    "Downtown Montreal",
    "Laval",
    "Longueuil",
    "South Shore"
  ];

  onSubmit(f:NgForm){
    console.log(f);
    this.getPostsService.getPosts(f.value);
    
    
  }

  constructor(private getPostsService: GetpostsService) { }

  ngOnInit() {
    
  }


}
