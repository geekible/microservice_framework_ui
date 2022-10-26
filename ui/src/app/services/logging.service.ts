import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LogEntry } from '../models/log-entry.model';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private apiEndPoint: string = environment.logServiceEndPoint + 'logging';

  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }

  getAll(): Observable<LogEntry[]> {
    return this.httpClient.get<LogEntry[]>(this.apiEndPoint + '/getall')
      .pipe(catchError(this.errorService.formatError));
  }
}
