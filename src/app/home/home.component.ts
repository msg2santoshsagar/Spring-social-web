import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    let url = environment.apiAuth;

    console.log("AUTH URL :: ", url);

    this.http.post(url, null, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      , withCredentials: true
    }).subscribe(
      data => {
        console.log("User is authorized");
        this.user = data;
      },
      err => {
        console.error("Error Occured while loading auth data :: ", err.error);
      }
      )
  }

  toStr(data) {
    if (data === undefined) {
      return "";
    }
    return data.map(a => a.name).join(", ");
  }

  logout() {
    console.log("Request to logout");
    let url = environment.apiLogOut;
    this.http.post(url, null, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      , withCredentials: true
    }).subscribe(
      data => {
        console.log("User is loggedout.");
        this.user = {};
        this.router.navigate(["/"]);
      },
      err => {
        console.error("Error Occured while logging out :: ", err.error);
        this.router.navigate(["/"]);
      }
      )
  }

}