import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { NavigationTopComponent } from './components/shared/navigation-top/navigation-top.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserMaintenanceComponent } from './components/user/user-maintenance/user-maintenance.component';
import { PasswordResetComponent } from './components/user/password-reset/password-reset.component';
import { DeleteUserComponent } from './components/user/delete-user/delete-user.component';
import { AuthRoleConfigComponent } from './components/configuration/auth-role-config/auth-role-config.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewLogEntryDialogComponent } from './components/dashboard/view-log-entry-dialog/view-log-entry-dialog.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { BearerTokenInterceptor } from './interceptors/bearer-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationTopComponent,
    FooterComponent,
    UserListComponent,
    UserMaintenanceComponent,
    PasswordResetComponent,
    DeleteUserComponent,
    AuthRoleConfigComponent,
    DashboardComponent,
    ViewLogEntryDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BearerTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
