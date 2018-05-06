import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/services/recipe.service';
import { HttpService } from '../shared/http.service';
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipeService,
              private httpService: HttpService  ) { }

  ngOnInit() {
    
  }

  onFetchDataClicked(){
    this.httpService.loadRecipes().map(
      (response:Response)=>{
        let recipes:Recipe[] = <Recipe[]>(response.json());
        for(let x of recipes){
          if(!x.ingridients)
          {
            x.ingridients =[];
          }
        }
        return recipes;
      }
    ).subscribe(
      (response:Recipe[])=>{        
        this.recipeService.putRecipes(response);
      }
    );   
  }

  onSaveDataClicked(){
    this.httpService.storeRecipes(this.recipeService.getRecipes()).subscribe(
      (response:Response)=>{
        console.log(response);
      }
    )
  }
}
