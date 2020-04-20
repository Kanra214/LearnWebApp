import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';
import { api } from '../api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  
  constructor(private http: HttpClient) { }
  checkUsernameNotTaken(username: string){
    const params = new HttpParams().set('attemptedUsername', username);
    return this.http.get(api.validatesignup.username, {
      observe: "response", 
      params: params
    });
  }
  checkEmailNotTaken(email: string){
    const params = new HttpParams().set('attemptedEmail', email);
    return this.http.get(api.validatesignup.email, {
      observe: "response", 
      params: params
    });
  }

  login(credentials){
    return this.http.post(api.login, credentials)
    .pipe(map(this.storeToken));
  }

  signup(credentials){
    return this.http.post(api.signup, credentials)
    .pipe(map(this.storeToken))
    
  }

  logout(){
    localStorage.removeItem('token');
  }

  private storeToken(res:any){
    if(res && res.token){
      localStorage.setItem('token', res.token);
      return true;
    }
    else{
      return false;
    }
  }

  get isLoggedIn() {
    return tokenNotExpired();
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;
    let result = new JwtHelper().decodeToken(token);
    return result;
  }
}


