import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/do';

export class AuthInterceptor implements HttpInterceptor{
    public intercept(req: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
        console.log('Intercepted request : ', req);
        return next.handle(req).do((event:HttpEvent<any>)=>console.log(event));
    }
}