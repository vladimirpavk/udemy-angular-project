import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes: Recipe[];

  //@Output() public onRecipeItemSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }

  public recipeItemClicked(recipe: Recipe){
    /*console.log("recipe-list.component - onRecipeItemSelected event fired.")
    this.onRecipeItemSelected.emit(recipe);*/
    this.recipeService.recipeSelected.emit(recipe);
  }

}
