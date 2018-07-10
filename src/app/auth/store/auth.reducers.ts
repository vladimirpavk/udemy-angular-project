import * as AuthActions from './auth.actions';

export interface AuthState{
     userLoggedIn : boolean,
     token: string
}

const initialState:AuthState = {
    userLoggedIn : false,
    token : ''
}

export function reducer(state=initialState, action:AuthActions.AuthActions){
    switch(action.type){
        case(AuthActions.SIGN_UP_USER):{

        }
        case(AuthActions.SIGN_IN_USER):{
            return {
                ...state,
                userLoggedIn: true
            }
        }
        case(AuthActions.LOGOUT_USER):{
            return {
                ...state,
                userLoggedIn: false,
                token: ''
            }
        }
        default:{
            return state;
        }
    }
}