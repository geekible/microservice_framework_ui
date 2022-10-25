import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationCredential } from 'src/app/models/authentication-credential.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AuthenticationCredential,
    private snackbar: MatSnackBar,
    private authService: AuthenticationService
  ) { }

  user: AuthenticationCredential = this.data;

  ngOnInit(): void {
  }

  confirmDelete() {
    this.authService.delete(this.user.ID)
      .subscribe(() => {
        this.dialogRef.close();
      }, err => {
        this.snackbar.open('Error deleteing user', 'Close')
      });
  }

  close() {
    this.dialogRef.close();
  }
}
