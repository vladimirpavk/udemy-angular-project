import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';


const appRoutes:Route[] = [
    { path: 'home', component: HomeComponent },
    //{ path: 'recipes', component: RecipesComponent },// loadChildren: './recipes/recipes.module#RecipesModule'},
    { path: 'shoppinglist', component: ShoppingListComponent },
    { path: '', redirectTo: 'home', pathMatch: "full"}   
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
    
}