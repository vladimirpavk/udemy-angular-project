import { Http, Response } from '@angular/http';
import { HttpClient, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService{    

   private targetUrl:string = 'https://udemy-angular-http-33434.firebaseio.com/recipes.json';
       
    constructor(private httpService:Http,
                private newHttpService:HttpClient){}
  
    public loadRecipes():Observable<Recipe[]>{
        /*const request=new HttpRequest("GET", this.targetUrl, { 
                                                                observe: 'body',
                                                                responseType: 'json',
                                                                params: 'queryParam',
                                                                reportProgress: true                                                              
                                                               });*/
       // this.newHttpService.request(request).subscribe((data: HttpResponse<Recipe>)=>console.log(data));
        return this.newHttpService.get<Recipe[]>(
            this.targetUrl, { 
                                observe: 'body',
                                responseType: 'json'
                            }
                        ).pipe(map(                                                            
                            (recipes:Recipe[])=>{                                                                
                                for(let x of recipes){                                                                   
                                    if(!x.ingridients)                                                                 
                                    {                                                                 
                                        x.ingridients =[];                                                                 
                                    }                                                               
                                }
                                return recipes;                                                              
                            }            
                        ));                                                             
    }                                                            

    public storeRecipes(recipes:Recipe[]):Observable<Recipe[]>{
        return this.newHttpService.put<Recipe[]>(this.targetUrl, recipes);
    }
      
    /*public storeRecipes(recipes:Recipe[]):Observable<Response>{
        return this.httpService.put(this.targetUrl, recipes);        
    }*/     

}