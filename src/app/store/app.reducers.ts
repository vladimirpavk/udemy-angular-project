import * as AuthReducers from '../auth/store/auth.reducers';
import * as RecipeReducers from '../recipes/store/recipes.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface AppState{
    "authState": AuthReducers.AuthState,
    "recipeState": RecipeReducers.RecipesState
}

export const reducers: ActionReducerMap<AppState> = {
    "authState": AuthReducers.reducer,
    "recipeState": RecipeReducers.reducer
}