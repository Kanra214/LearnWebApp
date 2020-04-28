import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/services/modal.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private modalService: ModalService, private authService:AuthService) { }

  ngOnInit() {
  }
  toggleModal(id:string){
    this.modalService.toggle(id);
  }

  logout(){
    this.authService.logout();
  }


}
