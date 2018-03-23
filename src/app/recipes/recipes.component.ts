import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public recipe: Recipe= new Recipe('Default name', 'Default description', 'Default image');

  constructor() { }

  ngOnInit() {
  }

  public recipeitemSelected(recipe: Recipe):void{
    console.log("recipes.component.ts - " + recipe.name);
    this.recipe=recipe;
  }

}
