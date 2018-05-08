import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "../../auth/auth.service";

@Injectable()
export class RecipeEditGuard implements CanActivate {

    constructor(private authService:AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
        if( this.authService.userLoggedIn ){
            return true;
        }
        return false;
    }
}