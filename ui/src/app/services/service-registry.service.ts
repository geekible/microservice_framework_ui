import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegistryService } from '../models/registry-service.model';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegistryService {

  private apiEndPoint: string = environment.serviceRegistryEndPoint + 'registry';

  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }

  getServiceStatus(): Observable<RegistryService[]> {
    return this.httpClient.get<RegistryService[]>(this.apiEndPoint + '/getservicestatus')
      .pipe(catchError(this.errorService.formatError));
  }
}
