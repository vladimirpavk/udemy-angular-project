import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/services/shopping-list.service';
import { RecipeResolveService } from './recipes/services/recipe-resolve.service';
import { RecipeService } from './recipes/services/recipe.service';
import { HttpService } from './shared/http.service';
import { RecipeEditGuard } from './recipes/recipe-edit/recipe-edit.guard.service';
import { AuthService } from './auth/auth.service';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule,
    AuthModule
  ],
  providers: [ShoppingListService, RecipeResolveService, RecipeService, HttpService, AuthService, RecipeEditGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
