import * as ShoppingListActions from './shopping-list.actions';

import { Ingridient } from '../../shared/ingridient.model';

const initialState = {
    ingridients:
    [
        new Ingridient('Apples', 5),
        new Ingridient('Tomatoes', 10)
    ]
};

export function shoppingListReducer(state = initialState, action:ShoppingListActions.ShoppingListActions){
    //must return new state
    switch (action.type){
        case ShoppingListActions.ADD__INGRIDIENT:{
            return {
                ...state,
                ingridients: [...state.ingridients, action.payload]
            }
        }
        default:
            return state;
    }
}