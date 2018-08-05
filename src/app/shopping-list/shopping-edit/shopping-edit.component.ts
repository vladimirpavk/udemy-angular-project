import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { Ingridient } from '../../shared/ingridient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  private subs:Subscription;
  private subs2:Subscription;
  private editMode:boolean = false;
  private editedItemIndex:number;
  private editedItem:Ingridient;
  @ViewChild('form') form:NgForm;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subs = this.shoppingListService.startedEditing.subscribe((index:number)=>{
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngridient(index);   
    
      this.form.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });      
    });

    this.subs2=this.shoppingListService.finishedEditing.subscribe((val:boolean)=>{
      this.form.reset();
      this.editMode = false;
    });
  }

  itemUpdated(slForm:NgForm){
    this.shoppingListService.updateIngridient(new Ingridient(this.form.value.name, this.form.value.amount));
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
    this.subs2.unsubscribe();
  }

  formSubmitted(form:NgForm){
    this.shoppingListService.addIngridient(new Ingridient(form.value.name, form.value.amount));
  }

  onClear(){
    this.form.reset;
    this.editMode=false;
  }

  onDelete(){
    this.onClear();
    this.shoppingListService.delIngridient(this.editedItemIndex);
  }

}
