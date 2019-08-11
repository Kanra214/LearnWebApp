import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }
  toggleModal(id:string){
    console.log('openModal: ', id);
    this.modalService.toggle(id);
  }

}
