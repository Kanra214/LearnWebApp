import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login(f:NgForm){
    console.log(f);
    // this.authService.getAuth(f.value);
    
    
  }
  signup(f:NgForm){
    console.log(f);
    // this.authService.getAuth(f.value);
    
    
  }

}
