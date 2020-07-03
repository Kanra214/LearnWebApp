import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AccountService } from '@services/account.service';
@Injectable({
  providedIn: 'root'
})
export class SimpleGuard implements CanActivate {
  constructor(private accountService : AccountService, private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.accountService.isLoggedIn) {
      this.router.navigate(['passport/login'], { queryParams: { returnUrl: state.url}});
      // console.log('state', state.url);
      return false;
    }
    return true;
  }
  
}
