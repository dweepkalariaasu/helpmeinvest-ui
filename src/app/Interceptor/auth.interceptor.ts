import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, handler: HttpHandler) {
    // Get the token from the auth service.
    const token = this.authService.getToken();

    // Add Authorization header
    const newReq = req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });

    return handler.handle(newReq);
  }
}
