import { EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import { Ingridient } from '../../shared/ingridient.model';
import { Subject } from 'rxjs/Subject';


export class RecipeService{
    
    //public recipeSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>();

    public recipesChanged:Subject<Recipe[]>=new Subject<Recipe[]>();    

    private recipes: Recipe[] = [
        new Recipe(    
            'A Test Recipe', 
            'This is simply a test', 
            'http://maxpixel.freegreatpicture.com/static/photo/1x/Recipe-Soup-Noodle-Curried-Spicy-Chicken-Khaosoi-2344152.jpg',
            [
                new Ingridient('Meso', 1),
                new Ingridient('Šampinjoni', 2)
            ]
        ),
        new Recipe(           
            'Recipe 2', 
            'Mushrooms Recipe Kitchen French Dish', 
            'http://maxpixel.freegreatpicture.com/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg',
            [
                new Ingridient('Kremenadle', 1),
                new Ingridient('Pečurke', 2)
            ]
        )
      ];
    
    public getRecipes():Recipe[]{
        return this.recipes.slice();
    }

    public getRecipeById(recipeId: number):Recipe{
        return this.recipes[recipeId];
    }

    public addNewRecipe(recipe:Recipe):void{       
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    public deleteRecipe(id:number){
        this.recipes=this.recipes.slice(id, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    public updateRecipe(id:number, newRecipe:Recipe):void{
        this.recipes[id]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
}