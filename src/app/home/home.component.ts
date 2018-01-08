import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { AuthDataService } from '../service/auth-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = this.authDataService.getAuthData();

  constructor(private authDataService : AuthDataService, private authService : AuthService) { }

  ngOnInit() {
    
  }

  toStr(data) {
    if (data === undefined) {
      return "";
    }
    return data.map(a => a.name).join(", ");
  }

  logout() {
    console.log("Request to logout");
    this.authService.logout();
  }

}