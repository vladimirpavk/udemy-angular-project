import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

import { Recipe } from "../recipe.model";
import { Observable } from "rxjs";
import { RecipeService } from "./recipe.service";


@Injectable()
export class RecipeResolveService implements Resolve<Recipe>{

    constructor(private recipeService: RecipeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Recipe> | Promise<Recipe> | Recipe
    {
        //console.log(this.recipeService.getRecipeById(+route.params['id']));
        return this.recipeService.getRecipeById(+route.params['id']);
    }

}