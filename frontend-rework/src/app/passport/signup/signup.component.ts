import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { AuthService } from './../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
  signupForm;



  // passwordsShouldMatch(group: FormGroup): ValidationErrors | null { // here we have the 'passwords' group
  // let pass = group.get('password').value;
  // let confirmPass = group.get('confirmPassword').value;
  // return pass === confirmPass ? null : { passwordsShouldMatch: true };     
  // }
  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }

  mustBeUniqueUsername(control: FormControl): Promise<ValidationErrors | null>{
    return new Promise((resolve, reject) => {
      this.authService.checkUsernameNotTaken(control.value).subscribe(res =>{
      console.log("got response: ", res);
      if(res.body["usernameTaken"] === "false"){
        resolve(null);
      }
      else if(res.body["usernameTaken"] === "true"){
        resolve({"notUnique": true});
        
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
    // {validator: this.passwordsShouldMatch }
    {validator: this.mustMatch('password', 'confirmPassword')}
  
    );
  }

  ngOnInit(): void {
  }
  signup(){
    this.authService.signup(this.signupForm.value).subscribe(result => {
      if(result.status === 200){
        //TODO: make a alert window
        this.router.navigate(['passport/login']);
      
      }
    }
    );
    
    
  }

}
