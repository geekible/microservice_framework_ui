import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationCredential } from 'src/app/models/authentication-credential.model';
import { AuthenticationUserRoleDto } from 'src/app/models/authentication-user-role-dto.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserRoleService } from 'src/app/services/user-role.service';

@Component({
  selector: 'app-user-maintenance',
  templateUrl: './user-maintenance.component.html',
  styleUrls: ['./user-maintenance.component.scss']
})
export class UserMaintenanceComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private authService: AuthenticationService,
    private roleService: UserRoleService) { }

  user: AuthenticationCredential = {} as AuthenticationCredential;
  userRoles: AuthenticationUserRoleDto[] = [] as AuthenticationUserRoleDto[];

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let userId: number = Number(params.get('id'));
        if (userId > 0) {
          this.authService.getById(userId)
            .subscribe(usr => {
              this.user = usr;

              this.roleService.getByEmailAddress(usr.EmailAddress, usr.ID)
                .subscribe(r => {
                  this.userRoles = r;
                });
            });
        } else {
          this.authService.getModel()
            .subscribe(usr => {
              this.user = usr;
            });
        }
      });
  }

  backToList() {
    this.router.navigateByUrl('/user/list');
  }

  update() {
    this.authService.update(this.user)
      .subscribe(res => {
        this.user = res;
        this.snackbar.open('Saved successfully', "Close")
      });
  }

}
