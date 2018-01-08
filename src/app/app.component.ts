import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './service/auth.service';
import { AuthDataService } from './service/auth-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Spring Social Application';

  constructor(private authService: AuthService, private authDataService: AuthDataService) { };

  ngOnInit() {
    
    this.authService.identity(true).then(this.authDataHandler.bind(this)).catch(this.authDataHandler.bind(this));
  }

 private authDataHandler(){
   // console.info("Auth data handler :: ",this.authDataService.isAuthenticated());
  }

}
