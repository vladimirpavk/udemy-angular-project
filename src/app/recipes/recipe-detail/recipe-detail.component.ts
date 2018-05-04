import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { Ingridient } from '../../shared/ingridient.model';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  public recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {   
    this.route.params.subscribe((params:Params)=>{  
      this.recipe=this.recipeService.getRecipeById(+params['id']);
      console.log(this.recipeService.getRecipeById(+params['id']));
    });
  }

  private toShoppingListClicked():void{
    for(let Aing of this.recipe.ingridients){      
      this.shoppingListService.addIngridient(Aing);
    }
  }

}
