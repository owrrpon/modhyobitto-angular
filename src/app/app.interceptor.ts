import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler): Observable<HttpEvent<unknown>> {
    /*// For adding credentials
    request = request.clone({
      withCredentials: true
    });
    */    
    return next.handle(request);
  }
}
