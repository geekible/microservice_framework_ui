import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuthModel } from 'src/app/models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  username: string = '';
  password: string = '';

  showForgottenPassword: boolean = false;
  forgottenPasswordEmailaddress: string = '';

  ngOnInit(): void {
  }

  doLogin() {
    this.authService.signIn(this.username, this.password)
      .subscribe(token => {
        let authM = new AuthModel();
        authM.setIsAuthenticated(true, this.username, token);
        this.router.navigateByUrl('/dashboard');
      }, err => {
        alert(err);
      });
  }

  forgottenPassword() {

  }
}
