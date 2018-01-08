import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AuthDataService } from './auth-data.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private authDataService: AuthDataService, private router : Router) { }

  identity(force?: boolean): Promise<any> {

    if (force === true) {
      this.authDataService.clearAuthentication();
    }

    if (this.authDataService.getAuthData() !== null) {
      return Promise.resolve(this.authDataService.getAuthData);
    }

    let url = environment.apiAuth;

    return this.http.post(url, null, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      , withCredentials: true
    }).toPromise().then(this.handleIdentitySuccessPromise.bind(this)).catch(this.handleIdentityErrorPromise.bind(this));
  }

  private handleIdentitySuccessPromise(user: Response) {
    this.authDataService.setAuthData(user);
    this.authDataService.setAuthenticated(true);
    return user || {};
  }

  private handleIdentityErrorPromise(err: Response | any) {
    console.log("Handle error : ", (this === undefined));
    this.authDataService.clearAuthentication();
    return Promise.reject(err.error || err);
  }

  login(username: string, password: string): Observable<any> {
    let body = "username=" + username + "&password=" + password;
    let url = environment.apiLogin;

    return this.http.post(url, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
      , withCredentials: true
    });
  }

  logout(){
    let url = environment.apiLogOut;
    this.http.post(url, null, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      , withCredentials: true
    }).subscribe(
      data => {
        console.log("User is loggedout.");
        this.authDataService.clearAuthentication();
        this.router.navigate(["/"]);
      },
      err => {
        console.error("Error Occured while logging out :: ", err.error);
        this.authDataService.clearAuthentication();
        this.router.navigate(["/"]);
      })
  }

}
