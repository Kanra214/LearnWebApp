import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url1:string = 'http://localhost:3000/api/users';
  url2:string = 'http://localhost:3000/api/auth';

  
  
  constructor(private http: HttpClient) { }
  checkUsernameNotTaken(username: string){
    const params = new HttpParams().set('attemptedUsername', username);
    return this.http.get(this.url1+'/checkusernametaken', {
      observe: "response", 
      params: params
    });
  }
  checkEmailNotTaken(email: string){
    const params = new HttpParams().set('attemptedEmail', email);
    return this.http.get(this.url1+'/checkemailtaken', {
      observe: "response", 
      params: params
    });
  }

  login(credentials){
    return this.http.post(this.url2+'/login', credentials)
    .pipe(map(this.storeToken));
  }

  signup(credentials){
    return this.http.post(this.url2 + '/signup', credentials)
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

  get isLoggedIn(){
    return tokenNotExpired();
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;
    let result = new JwtHelper().decodeToken(token);
    return result;
  }
}


