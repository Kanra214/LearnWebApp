import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '@services/message.service';
import { AccountService } from '@services/account.service';
import { Router } from '@angular/router';
import { GroupService } from '@services/group.service';

@Component({
  selector: 'app-groupcard',
  templateUrl: './groupcard.component.html',
  styleUrls: ['./groupcard.component.css']
})

export class GroupcardComponent implements OnInit {
  @Input() group:any;//TODO: change to group interface
  isMyGroups: boolean = this.router.isActive('/mygroups', true)
  showDetail:boolean = false;
  edit:boolean = false;
  constructor(public accountService: AccountService, private messageService: MessageService, private router: Router ) { }

  ngOnInit(): void {
  }
 eventProfile(event, endTime?){
    return event.eventName + ": " + this.parseTime(event.dateTime[0]).toLocaleString() +  (endTime ? " ~ " + this.parseTime(event.dateTime[1]).toLocaleString() : "");
  }
  get isOwner() {
    return this.accountService.currentUser?._id === this.group.owner;
  }
  get inGroupStatus(): string{
    if(this.group.members.some((member)=>{
      return member._id === this.accountService.currentUser?._id;
    })){
      return 'You are registered';

    }
    if(this.group.members.length >= this.group.capacity){
      return "This group is full";
    }
    if(!this.messageService.results){
      return "Join this group";
    }



   

    if(this.messageService.results.filter((message) =>{
      return message.groupId === this.group._id && message.isApproved === null && message.from._id === this.accountService.currentUser?._id;
      // console.log('1', message.groupId);
      // console.log('2', this.group._id);
      // return message.groupId === this.group._id;
      
    }).length === 1){
      return "Request sent";

    }
//isApproved and add member must be handled atomically in backend, following is commented out
    // if(this.messageService.results.filter((message) =>{
    //   return message.groupId === this.group._id && message.isApproved === true && message.from._id === this.authService.currentUser?._id;
    //   // console.log('1', message.groupId);
    //   // console.log('2', this.group._id);
    //   // return message.groupId === this.group._id;
      
    // }).length === 1 && !this.group.members.some((member)=>{
    //   return member._id === this.authService.currentUser?._id;
    // })){
    //   //back end processing
    //   return "Request sent";

    // }
 
    else{
      return "Join this group";
    }
}
parseTime(date){
  return new Date(date);
}
  toggleDetail(){
    this.showDetail = !this.showDetail;
  }

  // inProgress(group): boolean {
  //   // return group.events.some(
  //   //   (event) => {
  //   //     event.
  //   //   }
  //   // );
  //   return group.events.some((event)=>{
  //     const current = new Date();
  //     return event.dateTime[0].getTime <= current && current <= event.dateTime[1];
  //   });
  // }
  getInprogressEvent(){
    if(this.group.events.length === 0){
      return [];
    }
    return this.group.events.filter((event)=> {
      const current = new Date();
      return this.parseTime(event.dateTime[0]) <= current && current <= this.parseTime(event.dateTime[1]);
    });
  }
  getSortedEvents(){
    
    const sorted = this.group.events.sort((e1, e2) => {
      const e1t = this.parseTime(e1.dateTime[0]);
      const e2t = this.parseTime(e2.dateTime[0]);
      if(e1t > e2t){
        return 1;
      }
      if(e1t < e2t){
        return -1;
      }
      else{
        return 0;
      }
    });
    return sorted;
  }
  getNextEvent(){

    if(this.group.events.length === 0){
      return [];
    }
    const current = new Date();
    const sorted = this.getSortedEvents();
    return sorted.filter((event) =>{
      return this.parseTime(event.dateTime[0]) >= current;
    });

    
  }
  join(){
    this.messageService.createMessage(
      {
        to: this.group.owner,
        message_type:1,
        groupId: this.group._id,
        content: 'User ' + this.accountService.currentUser?.username + ' wants to join your group(' + this.group.subject + ').',
      
      }
    );

  }
 




}
