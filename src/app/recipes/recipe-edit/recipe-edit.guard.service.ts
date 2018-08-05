import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app.reducers";
import { AuthState } from "../../auth/store/auth.reducers";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RecipeEditGuard implements CanActivate {

    constructor(private store:Store<AppState>){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean>{
        
        //Ovo treba druačije da se napišse
        /*if( this.store.select('authState')['userLoggedIn'] ){
            return true;
        }
        return false;*/

        return this.store.select('authState').pipe(
            map((authState:AuthState)=>{
            return authState.userLoggedIn;
        }));
    }
}