import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../models/role.model';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiEndpoint: string = environment.authEndPoint + 'role';

  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }

  getAll(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(this.apiEndpoint + '/getall')
      .pipe(catchError(this.errorService.formatError));
  }

  save(model: Role): Observable<Role> {
    if (model.ID === 0) {
      return this.httpClient.post<Role>(this.apiEndpoint + '/create', model)
        .pipe(catchError(this.errorService.formatError));
    } else {
      return this.httpClient.put<Role>(this.apiEndpoint + '/update', model)
        .pipe(catchError(this.errorService.formatError));
    }
  }
}
