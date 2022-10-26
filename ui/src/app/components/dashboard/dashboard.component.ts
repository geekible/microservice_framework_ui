import { Component, OnInit } from '@angular/core';
import { LogEntry } from 'src/app/models/log-entry.model';
import { RegistryService } from 'src/app/models/registry-service.model';
import { LoggingService } from 'src/app/services/logging.service';
import { ServiceRegistryService } from 'src/app/services/service-registry.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private registryService: ServiceRegistryService,
    private logService: LoggingService
    ) { }

  servicesWithStatus: RegistryService[] = [] as RegistryService[];
  logEnteries: LogEntry[] = [] as LogEntry[];

  ngOnInit(): void {
    this.registryService.getServiceStatus()
      .subscribe(s => {
        this.servicesWithStatus = s;
      });

    this.logService.getAll()
      .subscribe(logs => {
        this.logEnteries = logs;
      });
  }

  refreshServiceStatus() {
    this.registryService.getServiceStatus()
      .subscribe(s => {
        this.servicesWithStatus = s;
      });
  }

  refreshServiceLog() {
    this.logService.getAll()
      .subscribe(logs => {
        this.logEnteries = logs;
      });
  }

}
