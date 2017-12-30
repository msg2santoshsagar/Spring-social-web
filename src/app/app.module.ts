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

import { homeRoute } from './home/home.router'
import { loginFormRoute } from './login-form/login-form.router';
import { pageNotFoundRoute } from './page-not-found/page-not-found.router';

const routes: Routes = [
  homeRoute,
  loginFormRoute,
  pageNotFoundRoute 
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
