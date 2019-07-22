import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  categoryList = [
    "car-washing",
    "coffee-holding",
    "tutoring",
    "dog-walking"
  ];

  locationList = [
    "downtown-montreal",
    "laval",
    "longueuil",
    "south-shore"
  ];

  onSubmit(value:any){
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
    
  }

}
