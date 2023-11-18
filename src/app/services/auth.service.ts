import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = '';

  constructor(private httpClient: HttpClient) { }

  public login(loginId: string, pwd: string): Observable<boolean> {
    const url = environment.hmiApiUrl + 'login';
    const payload = {
      userName: loginId,
      password: pwd
    };
    return this.httpClient.post(url, payload).pipe(map(res => {
      if (res && (res as any).token) {
        this.token = (res as any).token;
        return true;
      } else {
        return false;
      }
    }));
  }

  public getToken() {
    return this.token;
  }
}
