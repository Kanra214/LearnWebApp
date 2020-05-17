import { Injectable } from '@angular/core';
import { ModalComponent } from '@shared/modal/modal.component';

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
    let modalList:ModalComponent[] = this.modals.filter(x =>{
      return x.element.id === id
    });
    for(let modal of modalList){
      modal.toggle();
    }
      
    
    
    

  }

  closeAllModals(){
    for(let modal of this.modals){
      modal.close();
    }
  }
}
