import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder, AbstractControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ 
//         LoginComponent,
//       ],
//       providers: [
//         AuthService,
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
describe('LoginComponent signup form test', () => {


  let component: LoginComponent;
  let service: AuthService;
  let form: FormGroup;
  beforeEach(() => {
    service = new AuthService(null);
    component = new LoginComponent(new FormBuilder(), service, null);
    form = component.signupForm;

  });
  it("should create a signup form with 4 controls", () => {
    expect(form.contains('username')).toBe(true);
    expect(form.contains('email')).toBe(true);
    expect(form.contains('password')).toBe(true);
    expect(form.contains('confirmPassword')).toBe(true);
  });


  it("signup form should make the username control required", () => {
    const inputusername = "";
    let control: AbstractControl = component.signupForm.get('username');
    spyOn(service, 'checkUsernameNotTaken').and.callFake( (username) => {
      let res = new HttpResponse();
      return of(res);
      
    } );
    
    control.setValue(inputusername); 
    expect(control.valid).toBe(false);
   
    
    
  });

  it("signup form username is valid when response body usernameTaken is false", fakeAsync(() => {
    const inputusername = "kanra";
    let control: AbstractControl = component.signupForm.get('username');
    console.log("2 control errors " + control.errors);
    spyOn(service, 'checkUsernameNotTaken').and.callFake( (username) => {
      const res = new HttpResponse({body:{"usernameTaken":"false"}});
      
      return of(res);
      
    } );
  
    
    control.setValue(inputusername); 
    tick();
    
    expect(control.valid).toBe(true);

    }));
    
    



  it("signup form should be invalid if response body usernameTaken is true", fakeAsync(() => {
    const inputusername = "kanra";
    let control: AbstractControl = component.signupForm.get('username');
    spyOn(service, 'checkUsernameNotTaken').and.callFake( (username) => {
      const res = new HttpResponse({body:{"usernameTaken":"true"}});
      return of(res);
      
    } );
    
    control.setValue(inputusername); 
    tick();
    expect(control.valid).toBe(false);


  }));

  




});


