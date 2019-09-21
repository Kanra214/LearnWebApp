import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = 'http://localhost:3000/api/user';


  
  
  constructor(private http: HttpClient) { }
  checkUsernameNotTaken(username: string){
    const params = new HttpParams().set('attempedUsername', username);
    return this.http.get(this.url+'/checkUsernameTaken', {observe: "response", params: params});
  }
}
