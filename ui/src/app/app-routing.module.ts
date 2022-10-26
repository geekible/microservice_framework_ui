import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoleConfigComponent } from './components/configuration/auth-role-config/auth-role-config.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordResetComponent } from './components/user/password-reset/password-reset.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserMaintenanceComponent } from './components/user/user-maintenance/user-maintenance.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'user/list',
    component: UserListComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'user/maintenance/:id',
    component: UserMaintenanceComponent
  },
  {
    path: 'user/password-reset/:userId',
    component: PasswordResetComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'config',
    children: [
      {
        path: 'auth-roles',
        component: AuthRoleConfigComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardGuard]
})
export class AppRoutingModule { }
