import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  //when using services
  //public recipes: Recipe[];
  public recipes:Observable<AppState["recipeState"]>;

  private subs:Subscription;

  constructor(private recipeService:RecipeService, private store: Store<AppState>){    
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
    this.recipes = this.store.select("recipeState");
  }
}
