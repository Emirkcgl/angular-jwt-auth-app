import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('loginToken');
    const newCloneRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(newCloneRequest);
    return next.handle(newCloneRequest);
  }
}
