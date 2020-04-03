import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './Authentication.service';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthTokenInterceptorService implements HttpInterceptor {
  constructor(private auth: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url !== 'http://localhost:8080/login') {
      const modifiedReq = req.clone({headers: req.headers.append('Authorization', this.auth.getToken())});
      return next.handle(modifiedReq);
    }

    return next.handle(req);
  }
}
