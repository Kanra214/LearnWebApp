import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = 'https://ea5f36e3-3d92-423f-99f9-4b80aaf63581.mock.pstmn.io/api/users';


  
  
  constructor(private http: HttpClient) { }
  checkUsernameNotTaken(username: string){
    const params = new HttpParams().set('attemptedUsername', username);
    return this.http.get(this.url+'/checkusernametaken', {
      observe: "response", 
      params: params
    });
  }
}
