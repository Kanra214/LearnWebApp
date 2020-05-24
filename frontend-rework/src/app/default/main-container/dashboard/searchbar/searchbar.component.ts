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
        this.groupService.search(
          (group) =>{

                for (let key of Object.keys(f.value)) {
                  if(f.value[key] === ""){
                    continue;
                  }
                  if (group[key] !== f.value[key]){
                    console.log('false', key);
                    return false;
                }
                
                
              }
              return true;
              
            
              }
        );
  }

  constructor(private groupService: GroupService) {
    console.log('constructor called');

    this.groupService.getGroups({}, true);
   }

  ngOnInit() {
    // this.groupService.getGroups({}, true);
  }

  

}
