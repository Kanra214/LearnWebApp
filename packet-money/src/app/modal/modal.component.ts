import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ModalService } from 'src/services/modal.service';
declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  element: Element;
  constructor(private modalService: ModalService, private el:ElementRef) { 
    this.element = el.nativeElement;
  }

  ngOnInit() {
    this.modalService.add(this);
    
  
  }
  ngOnDestroy(){
    this.modalService.remove(this);
  }
  
  toggle(){
    
    $(this.element).find("#modalLoginForm").modal('toggle');
  }
  close(){
    $(this.element).find("#modalLoginForm").modal('hide');
  }
}
