import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { AuthService } from './../../core/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm;



  passwordsShouldMatch(group: FormGroup): ValidationErrors | null { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('confirmPassword').value;
  return pass === confirmPass ? null : { passwordsShouldMatch: true };     
  }

  mustBeUniqueUsername(control: FormControl): Promise<ValidationErrors | null>{
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
  constructor(private fb:FormBuilder, private authService: AuthService) { 
    this.signupForm = this.fb.group({
      "username": ['', [Validators.required], [this.mustBeUniqueUsername.bind(this)]],
      "email": ['', [Validators.required, Validators.email], [this.mustBeUniqueEmail.bind(this)]],
      "password": ['', [Validators.required, Validators.minLength(6)]],
      "confirmPassword": ['', Validators.required]
    }, 
    {validator: this.passwordsShouldMatch }
  
    );
  }

  ngOnInit(): void {
  }
  signup(){
    console.log(this.signupForm.value);
    // this.authService.getAuth(f.value);
    
    
  }

}
