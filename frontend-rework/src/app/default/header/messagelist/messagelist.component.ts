import { Component, OnInit } from '@angular/core';
import { ModalService } from '@services/modal.service';
import { Message } from '@models/message';
import { MessageService } from '@services/message.service';
import { AuthService } from '@services/auth.service';

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
  constructor(private modalService: ModalService, private messageService: MessageService, private authService: AuthService) { 

  }

  ngOnInit(): void {
  }
  openModal(id: string) {
    let message = this.messages.filter((message)=> {
      return message._id = id;
    });
     //deep copy res.body
  let messageToSend = JSON.parse(JSON.stringify(message[0]));
  
  if(!messageToSend.read){
    messageToSend.read = true;

  this.messageService.updateMessage(messageToSend);
  }

  this.modalService.open(id);
  }

get messages(){
  return this.messageService.results;
}
closeModal(id: string) {
    this.modalService.close(id);
    
}

approve(id:string, approve:boolean){
  let message: Message[] = this.messages.filter((message)=>{
    return message._id == id;
  });
  //deep copy res.body
  let messageToSend = JSON.parse(JSON.stringify(message[0]));
  messageToSend.isApproved = approve;
  this.messageService.updateMessage(messageToSend);
  }
  
  

}

