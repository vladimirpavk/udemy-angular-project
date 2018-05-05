import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { Ingridient } from '../../shared/ingridient.model';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  public recipe: Recipe;
  public recipeId:number;

  constructor(private shoppingListService: ShoppingListService, 
    private route: ActivatedRoute, 
    private recipeService: RecipeService,
    private router:Router) { }

  ngOnInit() {   
    this.route.params.subscribe((params:Params)=>{  
      this.recipeId=+params['id'];     
      this.recipe=this.recipeService.getRecipeById(this.recipeId);      
    });
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipe);
    this.router.navigate(['../']);
  }

  private toShoppingListClicked():void{
    for(let Aing of this.recipe.ingridients){      
      this.shoppingListService.addIngridient(Aing);
    }
  }

}
