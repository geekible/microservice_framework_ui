import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogEntry } from 'src/app/models/log-entry.model';
import { RegistryService } from 'src/app/models/registry-service.model';
import { LoggingService } from 'src/app/services/logging.service';
import { ServiceRegistryService } from 'src/app/services/service-registry.service';
import { ViewLogEntryDialogComponent } from './view-log-entry-dialog/view-log-entry-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
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

  viewLogEntry(log: LogEntry) {
    let dialogRef = this.dialog.open(ViewLogEntryDialogComponent, {
      height: '710px',
      width: '500px',
      data: log,
      disableClose: true
    });

    dialogRef.afterClosed()
      .subscribe(() => {
        this.logService.getAll()
          .subscribe(logs => {
            this.logEnteries = logs;
          });
      });
  }

}
