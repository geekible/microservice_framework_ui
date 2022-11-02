import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotificationRecord } from '../models/notification-record.model';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private endPoint: string = environment.notificationsEndpoint + 'notification';

  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }

  getNotifications(): Observable<NotificationRecord[]> {
    return this.httpClient.get<NotificationRecord[]>(this.endPoint + '/getrecent')
      .pipe(catchError(this.errorService.formatError));
  }
}
