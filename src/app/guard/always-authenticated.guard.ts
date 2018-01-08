import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { AuthDataService } from '../service/auth-data.service';

@Injectable()
export class AlwaysAuthenticatedGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private authDataService: AuthDataService) { };

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.identity(false).then(authDataHandler.bind(this)).catch(authDataHandler.bind(this));

    function authDataHandler() {
      const authenticated: boolean = this.authDataService.isAuthenticated();
      if (authenticated) {
        return true;
      } else {
        console.log("Navigating to access denied");
        this.router.navigate(['accessDenied']);
        return false;
      }
    }

  }
}
