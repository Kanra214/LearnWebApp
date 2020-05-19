import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  loginForm;
  invalidLogin: boolean;
  returnUrl: string;
  errorMsg: string;
  constructor(fb:FormBuilder, private authService: AuthService, private route: ActivatedRoute, private router: Router) { 
    this.loginForm = fb.group({
      "email": ['', [Validators.required, Validators.email]],
      "password": ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  login(){
    this.authService.login(this.loginForm.value).subscribe(result => {
      if(result === true){
        this.invalidLogin = false;
        this.router.navigate([this.returnUrl]);
        
      }
      else{
        this.invalidLogin = true;
        this.errorMsg = result;

  
      }
    }
    );
    

  }

}
