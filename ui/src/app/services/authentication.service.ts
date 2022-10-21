import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthenticationCredential } from '../models/authentication-credential.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiEndPoint: string = environment.authEndPoint + 'authentication';

  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }

  signIn(username: string, password: string): Observable<any> {
    return this.httpClient.get(this.apiEndPoint + '/signin?username=' + username + '&pwd=' + password)
      .pipe(catchError(this.errorService.formatError));
  }

  getAll(): Observable<AuthenticationCredential[]> {
    return this.httpClient.get<AuthenticationCredential[]>(this.apiEndPoint + '/getall')
      .pipe(catchError(this.errorService.formatError));
  }
}
