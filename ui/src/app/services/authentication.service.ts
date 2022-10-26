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

  getById(id: number): Observable<AuthenticationCredential> {
    return this.httpClient.get<AuthenticationCredential>(this.apiEndPoint + '/getbyid?id=' + id)
      .pipe(catchError(this.errorService.formatError));
  }

  getModel(): Observable<AuthenticationCredential> {
    return this.httpClient.get<AuthenticationCredential>(this.apiEndPoint + '/getmodel')
      .pipe(catchError(this.errorService.formatError));
  }

  getByEmail(email: string): Observable<AuthenticationCredential> {
    return this.httpClient.get<AuthenticationCredential>(this.apiEndPoint + '/getbyemail?email=' + email)
      .pipe(catchError(this.errorService.formatError));
  }

  update(model: AuthenticationCredential): Observable<AuthenticationCredential> {
    return this.httpClient.put<AuthenticationCredential>(this.apiEndPoint + '/update', model)
      .pipe(catchError(this.errorService.formatError));
  }

  updatePassword(model: AuthenticationCredential): Observable<AuthenticationCredential> {
    return this.httpClient.put<AuthenticationCredential>(this.apiEndPoint + '/updatepassword', model)
      .pipe(catchError(this.errorService.formatError));
  }

  create(model: AuthenticationCredential): Observable<AuthenticationCredential> {
    return this.httpClient.post<AuthenticationCredential>(this.apiEndPoint + '/create', model)
      .pipe(catchError(this.errorService.formatError));
  }

  delete(userId: number): Observable<any> {
    return this.httpClient.delete(this.apiEndPoint + '/delete?userId=' + userId)
      .pipe(catchError(this.errorService.formatError));
  }
}
