import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationUrl:string = 'http://localhost:3000/api/authentication';
  
  constructor() { }
}
