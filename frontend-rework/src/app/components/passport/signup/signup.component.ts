import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { AuthService } from './../../../core/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm;
  checkPasswords(group: FormGroup): ValidationErrors | null { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('confirmPassword').value;
  return pass === confirmPass ? null : { notSame: true }     
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
  constructor(fb:FormBuilder, private authService: AuthService) { 
    this.signupForm = fb.group({
      "username": ['', [Validators.required, this.mustBeUniqueUsername]],
      "email": ['', [Validators.required, Validators.email]],
      "password": ['', [Validators.required, Validators.minLength(6)]],
      "confirmPassword": ['', Validators.required]
    }, 
    {validator: this.checkPasswords }

    );
  }

  ngOnInit(): void {
  }
  signup(){
    console.log(this.signupForm.value);
    // this.authService.getAuth(f.value);
    
    
  }

}
