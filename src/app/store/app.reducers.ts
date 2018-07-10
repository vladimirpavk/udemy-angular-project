import * as AuthReducers from '../auth/store/auth.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState{
    authState: AuthReducers.AuthState
}

export const reducers: ActionReducerMap<AppState> = {
    authState: AuthReducers.reducer
}