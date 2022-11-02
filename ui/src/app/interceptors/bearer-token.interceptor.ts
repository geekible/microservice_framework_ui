import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthModel } from '../models/auth.model';

@Injectable()
export class BearerTokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let endpoint: string = environment.authEndPoint + 'authentication/signin';

    let authService = new AuthModel();
    let token: string = authService.token!;

    if (request.url.includes(endpoint)) {
      return next.handle(request);
    } else if (!token) {
      return next.handle(request);
    } else {
      request = request.clone({
        setHeaders: { Authorization: token }
      });

      return next.handle(request);
    }
  }
}
