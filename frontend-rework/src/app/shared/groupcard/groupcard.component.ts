import { Component, OnInit, Input } from '@angular/core';
import { Group } from '@models/group';
import { AuthService } from '@services/auth.service';
import { MessageService } from '@services/message.service';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY } from '@angular/cdk/overlay/overlay-directives';

@Component({
  selector: 'app-groupcard',
  templateUrl: './groupcard.component.html',
  styleUrls: ['./groupcard.component.css']
})
export class GroupcardComponent implements OnInit {
  @Input() group:any;//TODO: change to group interface
  showDetail:boolean = false;
  constructor(public authService: AuthService, private messageService: MessageService ) { }

  ngOnInit(): void {
  }
  get inGroupStatus(): string{
    console.log('get status');
    if(this.group.members.some((member)=>{
      return member._id === this.authService.currentUser?._id;
    })){
      return 'You are registered';

    }
    if(!this.messageService.results){
      return "Join this group";
    }
   

    if(this.messageService.results.filter((message) =>{
      return message.groupId === this.group._id && message.isApproved === null && message.from._id === this.authService.currentUser?._id;
      // console.log('1', message.groupId);
      // console.log('2', this.group._id);
      // return message.groupId === this.group._id;
      
    }).length === 1){
      return "Request sent";

    }
    else{
      return "Join this group";
    }
}
  toggleDetail(){
    this.showDetail = !this.showDetail;
  }
  join(){
    this.messageService.createMessage(
      {
        to: this.group.owner,
        isRequest:true,
        groupId: this.group._id,
        content: 'User ' + this.authService.currentUser?.username + ' wants to join your group(' + this.group.subject + ').',
      
      }
    );

  }



}
