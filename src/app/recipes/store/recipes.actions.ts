import { Action } from "@ngrx/store";
import { Recipe } from "../recipe.model";

export const ADD_RECIPE : string = 'ADD_RECIPE';
export const DELETE_RECIPE : string = 'DELETE_RECIPE';
export const UPDATE_RECIPE : string = 'UPDATE_RECIPE';
export const PUT_RECIPES : string = 'PUT_RECIPES';
export const LOAD_RECIPES : string = 'LOAD_RECIPES';
export const STORE_RECIPES : string = 'STORE_RECIPES';
export const LOAD_RECIPES_ERROR : string ="LOAD_RECIPES_ERROR";

export class AddRecipeAction implements Action{
    public readonly type:string = ADD_RECIPE;
    constructor(public payload:Recipe){}
}

export class DeleteRecipeAction implements Action{
    public readonly type:string = DELETE_RECIPE;
    constructor(public payload:Recipe){}
}

export class UpdateRecipeAction implements Action{
    public readonly type : string = UPDATE_RECIPE;
    constructor(public payload:{
        id : number,
        newRecipe: Recipe
    }){}
}

export class PutRecipesAction implements Action{
    public readonly type : string = PUT_RECIPES;
    constructor(public payload:Recipe[]){}
}

export class LoadRecipesAction implements Action{
    public readonly type : string = LOAD_RECIPES;
    constructor(){}
}

export class StoreRecipesAction implements Action{
    public readonly type : string = STORE_RECIPES;
}

export class LoadRecipesErrorAction implements Action{
    public readonly type : string =LOAD_RECIPES_ERROR;
}

export type RecipesActions = AddRecipeAction | DeleteRecipeAction | UpdateRecipeAction | PutRecipesAction | LoadRecipesAction | StoreRecipesAction
| LoadRecipesErrorAction;