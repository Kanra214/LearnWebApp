import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { HttpClient } from '@angular/common/http';
import { api } from '@api';
import { Subject } from 'rxjs';
import { Message } from '@models/message'
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends ResourceService {

  resultsChange: Subject<any[]> = new Subject<any[]>();
  results:any[];
  constructor(http: HttpClient, private accountService: AccountService) { 
    super(api.message, http);
    this.resultsChange.subscribe((value) => {
      this.results = value;
  }
  );
  console.log('constructor called');
  }

  getMessages(){
    if(this.accountService.isLoggedIn){

      console.log('get messages');
      let temp = [];
      super.get(
        {'userId': this.accountService.currentUser?._id},
        // {haha:'jaja'}
    ).subscribe(
        response => {

          for(let message of response as Message[]){  
            temp.push(message);
        }
        this.resultsChange.next(temp);

    
      });
  }
  }
  clear(){
    this.resultsChange.next([])
    console.log('results', this.results);
  }

  updateMessage(requestObj){

    requestObj.from = requestObj.from._id;

    requestObj.to = requestObj.to._id;
    super.update(requestObj).subscribe((result)=>{
      this.getMessages();
    });
  }

  createMessage(requestObj){
    super.create(requestObj).subscribe((result)=>{
      this.getMessages()
    });
  }



   


}
