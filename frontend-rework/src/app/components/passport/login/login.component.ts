import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(fb:FormBuilder, private authService: AuthService) { 
    this.loginForm = fb.group({
      "username": ['', Validators.required],
      "password": ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  login(){
    this.authService.login(this.loginForm.value);

  }

}
