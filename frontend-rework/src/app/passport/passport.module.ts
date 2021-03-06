import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { passportRoutes } from './passport.routes';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PassportComponent } from './passport.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    PassportComponent,
    
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(passportRoutes),
  ]
})
export class PassportModule { }
