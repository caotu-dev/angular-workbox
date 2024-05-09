import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { AuthService } from './auth.service';
import { LoaderService } from './loader.service';

@Injectable()
export class ApiRequestInterceptor implements HttpInterceptor {

  constructor(
    private authService : AuthService,
    private loaderService : LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();
    const accessToken = this.authService.getToken();
    if(accessToken) {
      request.clone().headers.set('Authorization', `Bearer ${accessToken}`)
    }
    return next.handle(request).pipe(
      finalize(() => {
        this.loaderService.hide();
        console.log('Request done');
      })
    );
  }
}
