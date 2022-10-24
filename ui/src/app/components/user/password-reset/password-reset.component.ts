import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationCredential } from 'src/app/models/authentication-credential.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private authService: AuthenticationService) { }

  user: AuthenticationCredential = {} as AuthenticationCredential;  

  password: string = '';
  confirmPassword: string = '';

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let userId: number = Number(params.get('userId'));
        this.authService.getById(userId)
          .subscribe(usr => {
            this.user = usr;  
          })
      });
  }

  update() {
    if (this.password === this.confirmPassword) {
      this.user.Password = this.password;

      this.authService.updatePassword(this.user)
        .subscribe(res => {
          this.user = res;
          this.user.Password = '';
          this.snackbar.open('Password updated succesfully updated', 'Close');
        });
    } else {
      this.password = '';
      this.confirmPassword = '';
      this.snackbar.open('Password and Re-Type Password must match', 'Close');
    }
  }

  backToList() {
    this.router.navigateByUrl('/user/list')
  }

}
