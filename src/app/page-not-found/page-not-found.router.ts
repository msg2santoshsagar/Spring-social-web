import { Route } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found.component";


export const  pageNotFoundRoute : Route = {
    path: "home",
    component: PageNotFoundComponent,
    data:{
      authenticated: true,
      authorities: [],
      pageTitle: 'Spring Social Example - Home'
    }
  };
