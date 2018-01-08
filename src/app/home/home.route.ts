import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AlwaysAuthenticatedGuard } from "../guard/always-authenticated.guard";


export const  homeRoute : Route = {
    path: "home",
    component: HomeComponent,
    canActivate:[AlwaysAuthenticatedGuard]
  };
