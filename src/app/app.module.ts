import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './interceptor/custom-http-interceptor'

import { homeRoute } from './home/home.route'
import { loginFormRoute } from './login-form/login-form.route';
import { pageNotFoundRoute, otherPathMatcher } from './page-not-found/page-not-found.route';
import { AlwaysAuthenticatedGuard } from './guard/always-authenticated.guard';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { accessDeniedRoute } from './access-denied/access-denied.route';
import { AuthService } from './service/auth.service';
import { AuthDataService } from './service/auth-data.service';
import { NotAuthenticatedGuard } from './guard/not-authenticated.guard';

const routes: Routes = [
  homeRoute,
  loginFormRoute,
  accessDeniedRoute,
  otherPathMatcher,
  pageNotFoundRoute
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    PageNotFoundComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    },
    AlwaysAuthenticatedGuard,
    NotAuthenticatedGuard,
    AuthService,
    AuthDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
