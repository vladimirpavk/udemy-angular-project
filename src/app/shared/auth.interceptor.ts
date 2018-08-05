import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AuthInterceptor implements HttpInterceptor{
    public intercept(req: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
        console.log('Intercepted request : ', req);
        return next.handle(req).pipe(tap((event:HttpEvent<any>)=>console.log(event)));
    }
}