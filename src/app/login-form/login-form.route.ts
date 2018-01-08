import { LoginFormComponent } from "../login-form/login-form.component";
import { Route } from "@angular/router";
import { NotAuthenticatedGuard } from "../guard/not-authenticated.guard";


export const  loginFormRoute : Route = {
    path: "",
    component: LoginFormComponent,
    pathMatch: "full",
    canActivate:[NotAuthenticatedGuard]
  };
