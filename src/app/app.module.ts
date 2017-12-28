import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes : Routes = [
  {
    "path": "",
    "component" : LoginFormComponent,
    "pathMatch": "full"
  },
  {
    "path": "home",
    "component" : HomeComponent
  },{
    "path":"**",
    "component":PageNotFoundComponent
  }

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
