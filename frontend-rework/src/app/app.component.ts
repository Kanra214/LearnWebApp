import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <router-outlet></router-outlet>
`,
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService){

  }
  ngOnInit(){
    this.authService.messageService.getMessages();
  }
  
}
