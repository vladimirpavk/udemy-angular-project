import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingridient } from '../../shared/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() public newIngridientAdded: EventEmitter<Ingridient> = new EventEmitter<Ingridient>();

  constructor() { }

  ngOnInit() {
  }

  public addButtonClicked(name: string, amount: number){
    //console.log(name, amount);
    this.newIngridientAdded.emit(new Ingridient(name, amount));
  }

}
