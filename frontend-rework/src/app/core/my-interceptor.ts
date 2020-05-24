import {  HttpEvent,

    HttpInterceptor,
   
    HttpHandler,
   
    HttpRequest,
   
    HttpResponse,
   
    HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from '@services/account.service';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService, private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (this.accountService.isLoggedIn) {
        request = request.clone({
            setHeaders: {
                token: this.accountService.token,
            }
        });
      }

        return next.handle(request).pipe(
        //   retry(1),
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              this.router.navigate(['passport/login']);
              return of(null);//i have to return a observable
            }
            else{

              return throwError(error);
            }
            
          })
        );    
      }
}
