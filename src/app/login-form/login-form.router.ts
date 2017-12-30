import { LoginFormComponent } from "../login-form/login-form.component";
import { Route } from "@angular/router";


export const  loginFormRoute : Route = {
    path: "",
    component: LoginFormComponent,
    pathMatch: "full",
    data: {
      authenticated: false,
      authorities: [],
      pageTitle: 'Spring Social Example - Login'
    }
  };
