import { Component, OnInit } from '@angular/core';
import { ModalService } from '@services/modal.service';
import { Message } from '@models/message';
import { MessageService } from '@services/message.service';

@Component({
  selector: 'app-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.css']
})
export class MessagelistComponent implements OnInit {
messagelist = [
  {
    _id: '092830',
    from: 'user1',
    to: 'kanra',
    content: 'hfoijsfoiahesihdgfoasljwoieghfowifjolwkesjwef',
    read: false,
    isRequest: true,
    isApproved: null,


  },
  {
    _id: '0542830',
    from: 'user2',
    to: 'kanra',
    content: 'sgkfjwpoirjpwojepofjwpeifojqepwihewefwnoeifw',
    read:true,
    isRequest: true,
    isApproved: true,
  },
  {
    _id: '054234830',
    from: 'user3',
    to: 'kanra',
    content: 'sgkfjwpoirjpwojepofjwpeifojqepwihewefwnoeifw',
    read:true,
    isRequest: false,
    isApproved: null,
  }

];
  constructor(private modalService: ModalService, private messageService: MessageService) { }

  ngOnInit(): void {
  }
  openModal(id: string) {
    this.modalService.open(id);
    let message = this.messagelist.filter((message)=> {
      return message._id = id;
    });
     //deep copy res.body
  let messageToSend = JSON.parse(JSON.stringify(message));
  messageToSend.read = true;
  this.messageService.update(messageToSend).subscribe( (result) => {
    
    message[0] = result as any;
  });
  }


closeModal(id: string) {
    this.modalService.close(id);
}

approve(id:string, approve:boolean){
  let message: Message[] = this.messagelist.filter((message)=>{
    return message._id == id;
  });
  //deep copy res.body
  let messageToSend = JSON.parse(JSON.stringify(message));
  messageToSend.isApproved = approve;
  this.messageService.update(messageToSend).subscribe( (result) => {
    
    message[0] = result as any;
  });
  }
  

}

