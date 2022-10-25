import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationCredential } from 'src/app/models/authentication-credential.model';
import { AuthenticationUserRoleDto } from 'src/app/models/authentication-user-role-dto.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RoleService } from 'src/app/services/role.service';
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
    private userRoleService: UserRoleService,
    private roleService: RoleService) { }

  user: AuthenticationCredential = {} as AuthenticationCredential;
  userRoles: AuthenticationUserRoleDto[] = [] as AuthenticationUserRoleDto[];
  isEmailReadOnly: boolean = false;

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let userId: number = Number(params.get('id'));
        if (userId > 0) {
          this.isEmailReadOnly = true;
          this.authService.getById(userId)
            .subscribe(usr => {
              this.user = usr;

              this.userRoleService.getByEmailAddress(usr.EmailAddress, usr.ID)
                .subscribe(r => {
                  this.userRoles = r;
                });
            });
        } else {
          this.isEmailReadOnly = false;
          this.authService.getModel()
            .subscribe(usr => {
              this.user = usr;

              this.roleService.getAll()
                .subscribe(roles => {

                  roles.forEach(role => {
                    let ur: AuthenticationUserRoleDto = { UserId: 0, RoleId: role.ID, RoleName: role.Role, IsSelected: false } as AuthenticationUserRoleDto;
                    this.userRoles.push(ur)
                  });

                });
            });
        }
      });
  }

  backToList() {
    this.router.navigateByUrl('/user/list');
  }

  saveUser() {
    if (this.user.ID > 0) {
      this.update();
    } else {
      this.create();
    }
  } 

  create() {
    this.authService.create(this.user)
      .subscribe(res => {
        this.user = res;

        this.userRoles.forEach(ur => {
          if (ur.IsSelected) {
            ur.UserId = res.ID
            this.userRoleService.create(ur)
              .subscribe(() => { });
          } else {
            
          }
        });

        this.snackbar.open('Saved successfully', "Close")
      });
  }

  update() {
    this.authService.update(this.user)
      .subscribe(res => {
        this.user = res;

        this.userRoles.forEach(ur => {
          if (ur.IsSelected) {
            ur.UserId = res.ID
            this.userRoleService.create(ur)
              .subscribe(() => { });
          } else {
            
          }
        });

        this.snackbar.open('Saved successfully', "Close")
      });
  }

}
