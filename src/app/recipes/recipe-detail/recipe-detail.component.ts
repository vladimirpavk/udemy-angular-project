import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { Ingridient } from '../../shared/ingridient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() public recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   
  }

  private toShoppingListClicked():void{
    for(let Aing of this.recipe.ingridients){      
      this.shoppingListService.addIngridient(Aing);
    }
  }

}
