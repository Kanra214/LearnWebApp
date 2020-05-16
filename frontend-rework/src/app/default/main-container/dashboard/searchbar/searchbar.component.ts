import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GroupService } from '@services/group.service';
import { University } from '@models/university';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  universities: string[] = Object.values(University);

  onSubmit(f:NgForm){
    console.log(f);
    // this.onSearch.emit(f.value);
        this.groupService.search(f.value);
  }

  constructor(private groupService: GroupService) {

    this.groupService.search({});
   }

  ngOnInit() {
  }

  

}
