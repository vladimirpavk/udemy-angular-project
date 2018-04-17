import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

const appRoutes:Route[] = [
    { path: 'shoppinglist', component: ShoppingListComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: '', redirectTo: 'recipes', pathMatch: "full"}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
    
}