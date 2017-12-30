import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";


export const  homeRoute : Route = {
    path: "home",
    component: HomeComponent,
    data:{
      authenticated: true,
      authorities: [],
      pageTitle: 'Spring Social Example - Home'
    }
  };
