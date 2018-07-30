import { Effect, Actions, ofType } from "@ngrx/effects";
import { HttpClient } from '@angular/common/http';
import * as RecipesActions from './recipes.actions';
import { Recipe } from "../recipe.model";
import { Injectable } from "@angular/core";
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class RecipesEffects{

    private targetUrl:string = 'https://udemy-angular-http-33434.firebaseio.com/recipes.json';

   constructor(private actions:Actions,
            private newHttpService:HttpClient
        ){
        }

   @Effect() public loadRecipesEffect = 
        this.actions.pipe(
            ofType(RecipesActions.LOAD_RECIPES),
            switchMap(
                (action:RecipesActions.LoadRecipesAction)=>
                    this.newHttpService.get<Recipe[]>(this.targetUrl, { 
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
}