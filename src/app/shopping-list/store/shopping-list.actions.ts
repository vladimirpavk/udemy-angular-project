import { Action } from '@ngrx/store';
import { Ingridient } from '../../shared/ingridient.model';

export const ADD__INGRIDIENT = 'ADD_INGRIDIENT';

export class AddIngridient implements Action {
    readonly type = ADD__INGRIDIENT;
    public payload: Ingridient;
}

export type ShoppingListActions = AddIngridient;