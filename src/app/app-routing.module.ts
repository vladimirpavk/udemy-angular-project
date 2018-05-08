import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolveService } from './recipes/services/recipe-resolve.service';
import { RecipeSelectComponent } from './recipes/recipe-select/recipe-select.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RecipeEditGuard } from './recipes/recipe-edit/recipe-edit.guard.service';

const appRoutes:Route[] = [
    { path: 'shoppinglist', component: ShoppingListComponent },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: 'new', component: RecipeEditComponent, canActivate: [ RecipeEditGuard ] },
        { path: ':id', component: RecipeDetailComponent }, // resolve: {'recipe': RecipeResolveService} },        
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [ RecipeEditGuard ] },
        { path: '', component: RecipeSelectComponent, pathMatch: "full"}
    ] },
    { path: '', redirectTo: 'recipes', pathMatch: "full"},
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
    
}