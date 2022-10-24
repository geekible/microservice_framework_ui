import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationCredential } from 'src/app/models/authentication-credential.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  users: AuthenticationCredential[] = [] as AuthenticationCredential[];

  ngOnInit(): void {
    this.authService.getAll()
      .subscribe(usrs => {
        this.users = usrs;
      });
  }

  viewUser(userId: number) {
    this.router.navigateByUrl('/user/maintenance/' + userId);
  }

  resetPassword(userId: number) {
    this.router.navigateByUrl('/user/password-reset/' + userId);
  }
}
