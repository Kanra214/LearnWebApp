import { Injectable } from '@angular/core';
import { User } from '@models/user';

import {JwtHelper, tokenNotExpired} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

get isLoggedIn() {
  return tokenNotExpired();
}

get currentUser(){
  const token = this.token;
  if(!token){
    return null;
  }

  let result = new JwtHelper().decodeToken(token) as User;
  return result;
}
get token(){
  let token = localStorage.getItem('token');
  if(!token) return null;
  return token

}

}
