import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() RecipeItemClicked:EventEmitter<void> = new EventEmitter<void>();
  @Output() ShopingListItemClicked:EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    
  }

  public onRecipeItemClicked():void{
    console.log("header.component - recipe item clicked");
    this.RecipeItemClicked.emit();
  }

  public onShopingListItemClicked():void{
    console.log("header.component - shopping list clicked");
    this.ShopingListItemClicked.emit();
  }
}
