import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

    /**
     * Custom Http Interceptor
     * 
     * To put Http credential to true and verify user authentication
     * 
     */

    intercept(request : HttpRequest<any> , next : HttpHandler){
       console.log("Custom Http Interceptor called");
       return next.handle(request);
    }

}
