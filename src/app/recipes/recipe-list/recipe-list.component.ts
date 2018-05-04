import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  public recipes: Recipe[];

  private subs:Subscription;

  constructor(private recipeService:RecipeService){    
  }

  ngOnInit() {
    this.subs=this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes=recipes;
      }
    );
    this.recipes=this.recipeService.getRecipes();
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
