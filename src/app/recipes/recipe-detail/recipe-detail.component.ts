import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { Ingridient } from '../../shared/ingridient.model';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

   public recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute) { }

  ngOnInit() {   
    this.route.data.subscribe((data:Data)=>{
      this.recipe=data['recipe'];
    })
  }

  private toShoppingListClicked():void{
    for(let Aing of this.recipe.ingridients){      
      this.shoppingListService.addIngridient(Aing);
    }
  }

}
