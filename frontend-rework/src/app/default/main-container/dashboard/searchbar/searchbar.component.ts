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

              //   for (let key of Object.keys(f.value)) {
              //     if(f.value[key] === ""){
              //       continue;
              //     }
              //     if (group[key] !== f.value[key]){
              //       console.log('false', key);
              //       return false;
              //   }
                
                
              // }
              // return true;
              if(f.value.keyword === "" && f.value.university === ""){
                return true;
              }
              if(f.value.keyword.length > 0 && f.value.university.length > 0){
                if(group.university.toLowerCase() === f.value.university.toLowerCase()){
                  if(group.subject.toLowerCase().includes(f.value.keyword.toLowerCase())){
                    return true;
                  }
                  if(group.university.toLowerCase().includes(f.value.keyword.toLowerCase())){
                    return true;
                  }
                  if(group.introduction){
                    if(group.introduction.toLowerCase().includes(f.value.keyword.toLowerCase())){
                      return true;
                    }
                  }
                  if(group.location){
                    if(group.location.toLowerCase().includes(f.value.keyword.toLowerCase())){
                      return true;
                    }
  
                  }
                  
                  if(group.events.length > 0){
                    if(group.events.some((event) => {return event.eventName.toLowerCase().includes(f.value.keyword.toLowerCase())})){
                      return true
                    }
                  }
                  if(group.members.some((member) => {return member.username.toLowerCase().includes(f.value.keyword.toLowerCase())})){
                    return true;
                  }
                }
                return false;
              }
              if(f.value.keyword.length > 0){
                if(group.subject.toLowerCase().includes(f.value.keyword.toLowerCase())){
                  return true;
                }
                if(group.university.toLowerCase().includes(f.value.keyword.toLowerCase())){
                  return true;
                }
                if(group.introduction){
                  if(group.introduction.toLowerCase().includes(f.value.keyword.toLowerCase())){
                    return true;
                  }
                }
                if(group.location){
                  if(group.location.toLowerCase().includes(f.value.keyword.toLowerCase())){
                    return true;
                  }

                }
                
                if(group.events.length > 0){
                  if(group.events.some((event) => {return event.eventName.toLowerCase().includes(f.value.keyword.toLowerCase())})){
                    return true
                  }
                }
                if(group.members.some((member) => {return member.username.toLowerCase().includes(f.value.keyword.toLowerCase())})){
                  return true;
                }
                

              }
              if(f.value.university.length > 0){
                if(group.university.toLowerCase().includes(f.value.university.toLowerCase())){
                  return true;
                }
              }
             
              return false;
              
            
              }
        
        );
  }

  constructor(private groupService: GroupService) {
    console.log('constructor called');

    this.groupService.getGroups({}, function getAll(group){
      return true;
    });
   }

  ngOnInit() {
    // this.groupService.getGroups({}, true);
  }

  

}
