import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { LogEntry } from 'src/app/models/log-entry.model';

@Component({
  selector: 'app-view-log-entry-dialog',
  templateUrl: './view-log-entry-dialog.component.html',
  styleUrls: ['./view-log-entry-dialog.component.scss']
})
export class ViewLogEntryDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewLogEntryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LogEntry
  ) { }

  createdDate: string = '';

  ngOnInit(): void {
    this.createdDate = (moment(this.data.CreatedAt)).format('DD MMM YYYY HH:mm:ss');

  }

  closeClick() {
    this.dialogRef.close();
  }

}
