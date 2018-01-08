import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthDataService } from '../service/auth-data.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable()
export class NotAuthenticatedGuard implements CanActivate {

  constructor(private authService: AuthService, private authDataService: AuthDataService, private router: Router) { };

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.identity(false).then(authDataHandler.bind(this)).catch(authDataHandler.bind(this));

    function authDataHandler() {
      const authenticated: boolean = this.authDataService.isAuthenticated();
      if (!authenticated) {
        return true;
      } else {
        console.log("User Found Logged in, redirectin to home!");
        this.router.navigate(['home']);
        return false;
      }
    }


  }
}
