import { Route } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found.component";


export const  otherPathMatcher : Route = {
    path: "**",
    redirectTo:'pageNotFound'
  };


  export const  pageNotFoundRoute : Route = {
    path: "pageNotFound",
    component: PageNotFoundComponent
  };
