import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm;
  loginForm;
  passwordsShouldMatch(group: FormGroup): ValidationErrors | null { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('confirmPassword').value;
  return pass === confirmPass ? null : { passwordsShouldMatch: true };     
  }

  mustBeUniqueUsername(control: FormControl): Promise<ValidationErrors | null>{
    console.log("check username is sending: ", control.value);
    
    
    return new Promise((resolve, reject) => {
      
        this.authService.checkUsernameNotTaken(control.value).subscribe(res =>{
        console.log("got response: ", res);
        if(res.status === 200){
          resolve(null);
        }
        else{
          resolve({"notUnique": true});
        }

   
    });
  
      
    });
  

  

  }


  
  

  constructor(private fb:FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      "username": ['', [Validators.required], [this.mustBeUniqueUsername.bind(this)]],
      "email": ['', [Validators.required, Validators.email]],
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
    console.log("oninit ", this.signupForm);
  }
  login(){
    console.log(this.loginForm);
    // this.authService.getAuth(f.value);
    
  }
  signup(){
    console.log(this.signupForm);
    // this.authService.getAuth(f.value);
    
    
  }

}
