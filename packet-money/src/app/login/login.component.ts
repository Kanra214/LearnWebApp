import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('signupModal', {static:true}) signupModal:ModalComponent;
  @ViewChild('loginModal', {static:true}) loginModal:ModalComponent;
  signupForm;
  loginForm;
  inValidLogin: boolean;
  passwordsShouldMatch(group: FormGroup): ValidationErrors | null { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('confirmPassword').value;
  return pass === confirmPass ? null : { passwordsShouldMatch: true };     
  }

  mustBeUniqueUsername(control: FormControl): Promise<ValidationErrors | null>{
    console.log("check username is sending: ", control.value);  
    return new Promise((resolve, reject) => {
      
        this.authService.checkUsernameNotTaken(control.value).subscribe(res =>{

        
          if(res.body["usernameTaken"] === "true"){
            resolve({notUnique:true});
          }
          else if(res.body['usernameTaken'] === "false"){
            resolve(null);
          }
          else{
            reject("something is wrong");
          }
    });
    });
  }
  mustBeUniqueEmail(control: FormControl): Promise<ValidationErrors | null>{
    console.log("check email is sending: ", control.value);  
    return new Promise((resolve, reject) => {
      
        this.authService.checkEmailNotTaken(control.value).subscribe(res =>{
          if(res.body["emailTaken"] === "true"){
            resolve({notUnique:true});
          }
          else if(res.body['emailTaken'] === "false"){
            resolve(null);
          }
          else{
            reject("something is wrong");
          }
    });
    });
  }


  
  

  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      "username": ['', [Validators.required], [this.mustBeUniqueUsername.bind(this)]],
      "email": ['', [Validators.required, Validators.email], [this.mustBeUniqueEmail.bind(this)]],
      "password": ['', [Validators.required, Validators.minLength(6)]],
      "confirmPassword": ['', Validators.required]
    }, 
    {validator: this.passwordsShouldMatch }
  
    );

    this.loginForm = this.fb.group({
      "email": ['', [Validators.required, Validators.email]],
      "password": ['', Validators.required],
    });
    console.log("signupForm", this.signupForm);
  }


  ngOnInit() {
  }
  login(){
    console.log('login is called');
    this.authService.login(this.loginForm.value)
    .subscribe(result => {
      console.log('navigate', result);
      if(result === true){
        console.log('true');
        this.inValidLogin = false;
        this.loginModal.close();
      }
      else{
        this.inValidLogin = true;
  
      }
    }
    );
    
  }
  signup(){
    this.authService.signup(this.signupForm.value)
    .subscribe(result => {
      if(result === true){
        this.inValidLogin = false;
        this.signupModal.close();
      }
      else{
        this.inValidLogin = true;
  
      }
    }
    );
    
    
  }



}
