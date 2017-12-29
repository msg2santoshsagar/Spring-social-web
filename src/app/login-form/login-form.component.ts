import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

    if (!environment.production) {
      this.user.username = "admin";
      this.user.password = "admin"
    }

    let url = environment.apiAuth;

    console.log("AUTH URL :: ", url);

    this.http.post(url, null, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
     , withCredentials: true
    }).subscribe(
      data => {
        console.log("You are already loggedin, redirecting to home page!!");
        this.router.navigate(["/home"]);
      },
      err => {
        console.error("Error Occured while loading auth data :: ", err.error);
      }
      )

  }

  login(loginForm: NgForm) {

    this.loginErrorMessage = null;

    console.log(loginForm.value);
    console.log("USER OBJECT ", this.user);

    let body = "username=" + this.user.username + "&password=" + this.user.password;
    let url = environment.apiLogin;

    console.log("URL ", url);

    this.http.post(url, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
      , withCredentials: true
    }).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/home"]);
      },
      err => {
        console.error(err.error);
        this.loginErrorMessage = err.error.message;
      }
      )

  }

}