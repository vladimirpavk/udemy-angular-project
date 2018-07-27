import { Effect, Actions } from "@ngrx/effects";
import { HttpClient, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import * as RecipesActions from './recipes.actions';
import { Recipe } from "../recipe.model";

export class RecipesEffects{

    private targetUrl:string = 'https://udemy-angular-http-33434.firebaseio.com/recipes.json';

   /* constructor(private actions:Actions,
        private newHttpService:HttpClient){
        }

    @Effect() public loadRecipesEffect = 
        this.actions.ofType(RecipesActions.LOAD_RECIPES)
            .switchMap(
                (action:RecipesActions.LoadRecipesAction)=>
                    this.newHttpService.get<Recipe[]>(this.targetUrl, { 
                                                                        observe: 'body',
                                                                        responseType: 'json'
                    }))
            .map(
                (recipes:Recipe[])=>{
                    for(let x of recipes){                                                                   
                        if(!x.ingridients)                                                                 
                        {                                                                 
                            x.ingridients =[];                                                                 
                        }                                                               
                    }
                    return {
                        "type": RecipesActions.PutRecipesAction,
                        "payload":recipes
                    } 
                }                                                                                                          
            );

    @Effect() public storeRecipesEffect;
    */
}