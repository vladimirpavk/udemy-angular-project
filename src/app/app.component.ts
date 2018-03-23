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

   public onRecipeClicked():void{  
      if(!this.recipesVisible){      
        this.recipesVisible=true;
        this.shoppingListVisible=false;        
      }
  }

  public onShoppingListClicked():void{      
      if(!this.shoppingListVisible) {
        this.shoppingListVisible=true;
        this.recipesVisible=false;
      }      
  }
}
