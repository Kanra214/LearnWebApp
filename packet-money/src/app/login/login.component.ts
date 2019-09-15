import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm = new FormGroup({
    "username": new FormControl('', Validators.required),
    "email": new FormControl('',[Validators.required, Validators.email]),

  });
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('confirmPass').value;
  return pass === confirmPass ? null : { notSame: true }     
}

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
