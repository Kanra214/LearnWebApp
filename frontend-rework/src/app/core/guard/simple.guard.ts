import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class SimpleGuard implements CanActivate {
  constructor(private authService : AuthService, private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['passport/login'], { queryParams: { returnUrl: state.url}});
      console.log('state', state.url);
      return false;
    }
    return true;
  }
  
}
