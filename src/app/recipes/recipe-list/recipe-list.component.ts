import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as RecipeState from '../store/recipes.reducer';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  public recipes: Recipe[];

  private subs:Subscription;

  constructor(private recipeService:RecipeService, private store: Store<RecipeState.RecipesState>){    
  }

  ngOnInit() {
    /*
    Use this code when using services below is ngrx/store
    =====================================================
    this.subs=this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes=recipes;
      }
    );
    this.recipes=this.recipeService.getRecipes();*/
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
