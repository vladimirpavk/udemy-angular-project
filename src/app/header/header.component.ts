import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public RecipeItemClicked:EventEmitter<void> = new EventEmitter<void>();
  public ShopingListItemClicked:EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  public onRecipeItemClicked():void{
    this.RecipeItemClicked.emit();
  }

  public onShopingListItemClicked():void{
    this.ShopingListItemClicked.emit();
  }
}
