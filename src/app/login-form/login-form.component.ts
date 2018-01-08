import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { AuthDataService } from '../service/auth-data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user = {
    username: "",
    password: ""
  };

  apiSignIn = {
    facebook: environment.apiLoginFB,
    twitter: environment.apiLoginTwitter,
    linkedin: environment.apiLoginLinkedin,
    google: environment.apiLoginGoogle
  }

  loginErrorMessage = null;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService
    , private authDataService: AuthDataService) { }

  ngOnInit() {

    if (!environment.production) {
      this.user.username = "admin";
      this.user.password = "admin"
    }

  }

  login(loginForm: NgForm) {

    this.loginErrorMessage = null;

    console.log(loginForm.value);
    console.log("USER OBJECT ", this.user);

    this.authService.login(this.user.username, this.user.password).subscribe(
      data => {
        console.log("Login Success Full :: ", data);
        this.router.navigate(["/home"]);
      },
      err => {
        console.error("Error Occured while loggin in :: ", err.error);
        this.loginErrorMessage = err.error.message;
      });

  }

}
