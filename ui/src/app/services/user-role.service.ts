import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationUserRoleDto } from '../models/authentication-user-role-dto.model';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  private apiEndPoint: string = environment.authEndPoint + 'user-role';

  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }

  getByEmailAddress(emailAddress: string, userId: number): Observable<AuthenticationUserRoleDto[]> {
    return this.httpClient.get<AuthenticationUserRoleDto[]>(this.apiEndPoint + '/getbyemailaddress?email=' + emailAddress + '&userId=' + userId)
      .pipe(catchError(this.errorService.formatError));
  }
}
