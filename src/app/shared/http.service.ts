import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../recipes/recipe.model';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService{    

    private targetUrl:string = 'https://udemy-angular-http-33434.firebaseio.com/recipes.json';

    constructor(private httpService:Http){}
    
    public storeRecipes(recipes:Recipe[]):Observable<Response>{
        return this.httpService.put(this.targetUrl, recipes);        
    }

    public loadRecipes():Observable<Response>{
        return this.httpService.get(this.targetUrl);
    }
}