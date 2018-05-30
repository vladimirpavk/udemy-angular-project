import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../recipes/recipe.model';
import { Injectable } from '@angular/core';

import { HttpClient, HttpEvent } from '@angular/common/http';

@Injectable()
export class HttpService{    

    private targetUrl:string = 'https://udemy-angular-http-33434.firebaseio.com/recipes.json';

    constructor(private httpService:Http,
                private newHttpService:HttpClient){}
    
    /*public storeRecipes(recipes:Recipe[]):Observable<Response>{
        return this.httpService.put(this.targetUrl, recipes);        
    }

    
    public loadRecipes():Observable<Response>{
        this.newHttpService.get<Recipe[]>(this.targetUrl, { observe: 'body',
                                                            responseType: 'json'}).subscribe((data:Recipe[])=>{
                                                                console.log(data);
                                                            });
        
        return this.httpService.get(this.targetUrl);
    }*/

    public loadRecipes():Observable<Recipe[]>{
       return this.newHttpService.get<Recipe[]>(this.targetUrl, { observe: 'body',
                                                                  responseType: 'json'});
    }    

    public storeRecipes(recipes:Recipe[]):Observable<Recipe[]>{
        return this.newHttpService.put<Recipe[]>(this.targetUrl, recipes);
    }
}