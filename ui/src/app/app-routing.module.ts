import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserMaintenanceComponent } from './components/user/user-maintenance/user-maintenance.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'user/list',
    component: UserListComponent
  },
  {
    path: 'user/maintenance/:id',
    component: UserMaintenanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
