import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public recipesVisible: boolean = true;
  public shoppingListVisible: boolean = false;

   public onRecipeItemClicked():void{
    if(this.recipesVisible) return;
    this.recipesVisible=false;
    this.shoppingListVisible=true;
  }

  public onShopingListItemClicked():void{
    if(this.shoppingListVisible) return;
    this.shoppingListVisible=false;
    this.recipesVisible=true;
  }

}
