import { Route } from "@angular/router";
import { AlwaysAuthenticatedGuard } from "../guard/always-authenticated.guard";
import { AccessDeniedComponent } from "./access-denied.component";

export const accessDeniedRoute: Route = {
    path: "accessDenied",
    component: AccessDeniedComponent
};
