import { Effect, Actions, ofType } from "@ngrx/effects";
import { HttpClient, HttpRequest } from '@angular/common/http';
import * as RecipesActions from './recipes.actions';
import { Recipe } from "../recipe.model";
import { Injectable } from "@angular/core";
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app.reducers";
import { RecipesState } from "./recipes.reducer";

@Injectable()
export class RecipesEffects{

    private targetUrl:string = 'https://udemy-angular-http-33434.firebaseio.com/recipes.json';

   constructor(private actions:Actions,
            private newHttpClient:HttpClient,           
            private store:Store<AppState>
        ){
        }

   @Effect() public loadRecipesEffect = 
        this.actions.pipe(
            ofType(RecipesActions.LOAD_RECIPES),
            switchMap(
                (action:RecipesActions.LoadRecipesAction)=>
                    this.newHttpClient.get<Recipe[]>(this.targetUrl, { 
                                                                        observe: 'body',
                                                                        responseType: 'json'
                    }).pipe(
                            map(
                                (recipes:Recipe[])=>{
                                    for(let x of recipes){                                                                   
                                        if(!x.ingridients)                                                                 
                                        {                                                                 
                                            x.ingridients =[];                                                                 
                                        }                                                               
                                    }
                                    return new RecipesActions.PutRecipesAction(recipes);
                                }                                                                                                          
                            ),
                            catchError((err:any)=>{
                                console.log(err);
                                return of(new RecipesActions.LoadRecipesErrorAction());
                            }))
                        ));
    
    @Effect({dispatch:false}) public storeRecipesEffect =
        this.actions.pipe(
            ofType(RecipesActions.STORE_RECIPES),
            withLatestFrom(this.store.select('recipeState')),
            switchMap(
                ([action, state])=>{
                    const req=new HttpRequest('PUT', this.targetUrl, state.recipes, {reportProgress:true});
                    return this.newHttpClient.request(req);
                }
            )
        );
}