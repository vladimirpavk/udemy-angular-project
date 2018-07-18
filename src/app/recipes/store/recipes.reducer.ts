import { Recipe } from '../recipe.model';
import { Ingridient } from '../../shared/ingridient.model';
import * as RecipesActions from './recipes.actions';

export interface RecipesState {
    recipes : Recipe[]
};

const initialState : RecipesState = {
    recipes : [
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
    ]
};

export function reducer(state=initialState, action:RecipesActions.RecipesActions){
    switch(action.type){
        case(RecipesActions.ADD_RECIPE):{
            return{
                ...state,
                recipes: [...state.recipes, (<RecipesActions.AddRecipeAction>action).payload]
            }
        }
        case(RecipesActions.DELETE_RECIPE):{
            let recipe = (<RecipesActions.DeleteRecipeAction>action).payload;
            let newArray:Recipe[] = this.recipes.filter(
                (element:Recipe)=>{                
                    if(element.name!==recipe.name){                    
                        return true;
                    }
            });
            
            return {
                ...state,
                recipes : [...newArray]
            }
        }
        case(RecipesActions.PUT_RECIPES):{
            return{
                ...state,
                recipes: [...((<RecipesActions.PutRecipesAction>action).payload)]
            }
        }
        case(RecipesActions.UPDATE_RECIPE):{
            let newState=state.recipes;
            newState[(<RecipesActions.UpdateRecipeAction>action).payload.id]=(<RecipesActions.UpdateRecipeAction>action).payload.newRecipe;
            return{
                ...state,
                recipes: [...newState]
            }
        }
        default:{
            return state;
        }
    }
}
