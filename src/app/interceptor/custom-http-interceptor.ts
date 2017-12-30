import 'rxjs/add/operator/do';

import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpResponse } from "@angular/common/http";
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

    constructor(private router : Router){}

    /**
     * Custom Http Interceptor
     * 
     * 
     */

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).do(
            (event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // TODO : If you can see response
                   // console.log("You got response", event);
                }
            },
            (err: any) => {
                if( err instanceof HttpErrorResponse){
                    if (err.status === 401) {
                       const currentUrl = this.router.url;
                       if( this.router.url === '/'){
                            console.info("User is already at login page.");
                       }else{
                            console.info("User is not at login page, routing to login page.");
                            this.router.navigate(["/"]);
                       }
                       
                      }
                }
            }
        );
    }


}