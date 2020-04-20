import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
@Injectable({
  providedIn: 'root'
})
export class SimpleGuard implements CanActivate {
  constructor(private authService : AuthService, private router: Router){}
  canActivate(): boolean {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['passport/login']);
      return false;
    }
    return true;
  }
  
}
