import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
  //providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  public recipe: Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe) => {
        this.recipe=recipe;
      }
    )
  }

  public recipeitemSelected(recipe: Recipe):void{
    console.log("recipes.component.ts - " + recipe.name);
    this.recipe=recipe;
  }

}
