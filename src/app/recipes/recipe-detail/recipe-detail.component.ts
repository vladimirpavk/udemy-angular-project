import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { Ingridient } from '../../shared/ingridient.model';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators'
import * as RecipeActions from '../store/recipes.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  public recipe: Recipe;
  public recipeState:Observable<AppState["recipeState"]>;

  public recipeId:number;

  constructor(private shoppingListService: ShoppingListService, 
    private route: ActivatedRoute, 
    private recipeService: RecipeService,
    private router:Router,
    private store:Store<AppState>
  ) { }

  ngOnInit() {   
    this.route.params.subscribe((params:Params)=>{  
      this.recipeId=+params['id'];     
      //when using services uncomment
      //this.recipe=this.recipeService.getRecipeById(this.recipeId);
      this.recipeState = this.store.select('recipeState');
      this.recipeState.pipe(
        take(1))
        .subscribe(
          (state:AppState["recipeState"])=>{
            this.recipe=state.recipes[+params['id']];
          }
        );
    });
  }

  deleteRecipe(){
    //use code below when using services
    //this.recipeService.deleteRecipe(this.recipe);
    this.store.dispatch(new RecipeActions.DeleteRecipeAction(this.recipe));
    this.router.navigate(['../']);
  }

  private toShoppingListClicked():void{
    /*for(let Aing of this.recipe.ingridients){      
      this.shoppingListService.addIngridient(Aing);
    }*/
  }

}
