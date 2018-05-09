import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';


import { recipeRoutes } from './recipes/recipes-routing.module';


const appRoutes:Route[] = [
    { path: 'shoppinglist', component: ShoppingListComponent },
    { path: '', redirectTo: 'recipes', pathMatch: "full"}   
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
    
}