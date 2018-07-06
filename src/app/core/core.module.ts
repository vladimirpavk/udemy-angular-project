import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from '@ngrx/store';

import * as AuthReducer from '../auth/store/auth.reducers';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { ShoppingListService } from './../shopping-list/services/shopping-list.service';
import { RecipeResolveService } from './../recipes/services/recipe-resolve.service';
import { RecipeService } from './../recipes/services/recipe.service';
import { HttpService } from './../shared/http.service';
import { AuthService } from './../auth/auth.service';



@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        BrowserModule,
        StoreModule.forRoot({
            authState: AuthReducer.reducer
        })
    ],
    exports: [
        AppRoutingModule,
        HomeComponent,
        HeaderComponent,
        StoreModule
    ],
    providers : [ ShoppingListService, RecipeResolveService, RecipeService, HttpService, AuthService ]
})
export class CoreModule{

}