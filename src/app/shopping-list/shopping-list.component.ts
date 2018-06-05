import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './services/shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  public ingridients: Observable<{
    ingridients: Ingridient[]
  }>;

  private subs:Subscription;

  constructor(private shoppingListService: ShoppingListService, private store:Store<{shopplingList: {
    ingridients: Ingridient[]
  }}>) { }

  ngOnInit() {
    this.ingridients=this.store.select('shoppingList');
    //this.ingridients=this.shoppingListService.getIngridients();
    this.subs = this.shoppingListService.newIngridientAdded.subscribe(
      (ingridients:Ingridient[])=>{
        this.ingridients=ingridients;
      }
    )
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  itemClicked(index:number){    
    this.shoppingListService.startedEditing.next(index);
  }
}
