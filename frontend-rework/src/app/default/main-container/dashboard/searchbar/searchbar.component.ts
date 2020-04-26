import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GroupService } from 'src/app/core/group.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

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
    this.groupService.search(f)
  }

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    
  }

  

}
