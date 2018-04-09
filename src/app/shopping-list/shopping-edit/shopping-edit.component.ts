import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingridient } from '../../shared/ingridient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {

  }

  public addButtonClicked(name: string, amount: number){    
    this.shoppingListService.addIngridient(new Ingridient(name, amount));
  }

}
