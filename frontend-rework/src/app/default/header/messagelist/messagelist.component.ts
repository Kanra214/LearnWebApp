import { Component, OnInit } from '@angular/core';
import { ModalService } from '@services/modal.service';
import { Message } from '@models/message';
import { MessageService } from '@services/message.service';
import { AuthService } from '@services/auth.service';
import { UserInfo } from '@models/userInfo';
import { GroupService } from '@services/group.service';

@Component({
  selector: 'app-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.css']
})
export class MessagelistComponent implements OnInit {
// messagelist = [
//   {
//     _id: '092830',
//     from: 'user1',
//     to: 'kanra',
//     content: 'hfoijsfoiahesihdgfoasljwoieghfowifjolwkesjwef',
//     read: false,
//     isRequest: true,
//     isApproved: null,
//     groupId:'20394234',


//   },
//   {
//     _id: '0542830',
//     from: 'user2',
//     to: 'kanra',
//     content: 'sgkfjwpoirjpwojepofjwpeifojqepwihewefwnoeifw',
//     read:true,
//     isRequest: true,
//     isApproved: true,
//     groupId:'20394234',
//   },
//   {
//     _id: '054234830',
//     from: 'user3',
//     to: 'kanra',
//     content: 'sgkfjwpoirjpwojepofjwpeifojqepwihewefwnoeifw',
//     read:true,
//     isRequest: false,
//     isApproved: null,
//     groupId:'20394234',
//   }

// ];
  constructor(private modalService: ModalService, private messageService: MessageService, public authService: AuthService, private groupService: GroupService) { 

  }

  ngOnInit(): void {
  }
  openModal(id: string) {
    let message = this.messages.filter((message)=> {
      return message._id === id;
    });
     //deep copy res.body
  let messageToSend = JSON.parse(JSON.stringify(message[0]));
  
  if(!messageToSend.read && message[0].to._id === this.authService.currentUser._id){
    messageToSend.read = true;
//to solve modal close on getmessage, we use update instead of updateMessage
    this.messageService.update(messageToSend).subscribe((result)=>{
    if(result.status === 200){
      message[0].read = true;
      this.modalService.open(id);
    }
    });
  }
  else{
    this.modalService.open(id);
  }
  }

get messages(){
  return this.messageService.results;
}
closeModal(id: string) {
    this.modalService.close(id);
    
}

approve(id:string, approve:boolean){
  let message: Message[] = this.messages.filter((message)=>{
    return message._id === id;
  });
  // //deep copy res.body
  // let messageToSend = JSON.parse(JSON.stringify(message[0]));
  // messageToSend.isApproved = approve;
  // this.messageService.updateMessage(messageToSend);

  //create a response message
  let messageToCreate : Message = {
    to: (message[0].from as UserInfo)._id,
    message_type: (approve? 2 : 3),
    content: "Your request has been " + (approve ? "approved" : "rejected") + " by " + this.authService.currentUser.username,//TODO: put group name here 
    groupId: message[0].groupId,
    last_message: message[0]._id,


  }
  this.messageService.createMessage(messageToCreate);
  
  }
  
  

}

