import { EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';


export class RecipeService{
    
    public recipeSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Recipe-Soup-Noodle-Curried-Spicy-Chicken-Khaosoi-2344152.jpg'),
        new Recipe('Recipe 2', 'Mushrooms Recipe Kitchen French Dish', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg')
      ];
    
    public getRecipes():Recipe[]{
        return this.recipes.slice();
    }
}