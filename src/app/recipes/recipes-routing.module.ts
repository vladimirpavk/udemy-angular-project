import { NgModule, Injectable } from "@angular/core";
import { Route, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeResolveService } from './services/recipe-resolve.service';
import { RecipeSelectComponent } from './recipe-select/recipe-select.component';
import { RecipeEditGuard } from './recipe-edit/recipe-edit.guard.service';

export const recipeRoutes:Route[] = [    
    { path: 'recipes', component: RecipesComponent, children: [        
        { path: 'new', component: RecipeEditComponent, canActivate: [ RecipeEditGuard ] },
        { path: ':id', component: RecipeDetailComponent }, // resolve: {'recipe': RecipeResolveService} },        
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [ RecipeEditGuard ] },
        { path: '', component: RecipeSelectComponent, pathMatch: 'full' }
    ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(recipeRoutes)],
    exports: [ RouterModule ],
    providers: [ RecipeEditGuard ]
})
export class RecipesRoutingModule {

}