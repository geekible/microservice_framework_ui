import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
      .subscribe(() => {
        this.router.navigateByUrl('/user/list');
      }, err => {
        alert(err);
      });
  }

  forgottenPassword() {

  }
}
