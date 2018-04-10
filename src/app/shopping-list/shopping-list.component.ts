import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingridients: Ingridient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingridients=this.shoppingListService.getIngridients();
    this.shoppingListService.newIngridientAdded.subscribe(
      (ingridients:Ingridient[])=>{
        this.ingridients=ingridients;
      }
    )
  }
}
