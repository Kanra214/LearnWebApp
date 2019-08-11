import { Injectable } from '@angular/core';
import { ModalComponent } from 'src/app/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals:ModalComponent[] = [];
  constructor() { }
  add(modal:ModalComponent){
    this.modals.push(modal);
  }
  remove(modal:ModalComponent){
    this.modals = this.modals.filter(x => {
      return x !== modal;
    });
  }

  toggle(id:string){
    console.log(this.modals);
    let modalList:ModalComponent[] = this.modals.filter(x =>{
      return x.element.id === id
    });
    for(let modal of modalList){
      console.log('toggle', modal);
      modal.toggle();
    }
      
    
    
    

  }
}
