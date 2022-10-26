import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-auth-role-config',
  templateUrl: './auth-role-config.component.html',
  styleUrls: ['./auth-role-config.component.scss']
})
export class AuthRoleConfigComponent implements OnInit {

  constructor(
    private roleService: RoleService,
  ) { }

  showEditRole: boolean = false;
  roles: Role[] = [] as Role[];
  editRole: Role = {} as Role;

  ngOnInit(): void {
    this.roleService.getAll()
      .subscribe(rls => {
        this.roles = rls;
      });
  }

  closeEdit() {
    this.showEditRole = false;
  }

  showMaintenance(id: number) {
    if (id === 0) {
      this.editRole = {} as Role;
    } else {
      this.editRole = this.roles.filter(x => x.ID === id)[0];
    }
    this.showEditRole = true;
  }

  saveRole() {
    this.roleService.save(this.editRole)
      .subscribe(() => {
        this.roleService.getAll()
        .subscribe(rls => {
          this.roles = rls;
          this.showEditRole = false;
        });
      });
  }
}
