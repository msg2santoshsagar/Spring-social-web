import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthDataService {

  private _isAuthenticated: boolean = false;
  private _authData: any = null;

  isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  getAuthData() {
    return this._authData
  }

  clearAuthentication(): void {
    this.setAuthData(null);
    this.setAuthenticated(false);
  }

  setAuthenticated(authenticated) {
    this._isAuthenticated = authenticated;
  }

  setAuthData(authData) {
    this._authData = authData;
  }


}
