import * as AuthActions from './auth.actions';

export interface AuthState{
    "alreadyAttemptedToLogIn" : boolean,
     "userLoggedIn" : boolean,
     "token": string
}

const initialState:AuthState = {
    "alreadyAttemptedToLogIn" : false,
    "userLoggedIn" : false,
    "token" : ''
}

export function reducer(state=initialState, action:AuthActions.AuthActions){
    switch(action.type){
        case(AuthActions.SIGN_UP_USER):{

        }
        case(AuthActions.SIGN_IN_USER):{
            return {
                ...state,
                "userLoggedIn": true,                            
            }
        }
        case(AuthActions.FIRST_TIME_SIGN_IN_USER):{
            return {
                ...state,
                "alreadyAttemptedToLogIn": true
            }
        }
        case(AuthActions.LOGOUT_USER):{
            return {
                ...state,
                "userLoggedIn": false,
                "alreadyAttemptedToLogIn": false,
                "token": ''
            }
        }
        case(AuthActions.SET_TOKEN):{
            return{
                ...state,
                "token": (<AuthActions.SetToken>action).payload
            }
        }
        default:{
            return state;
        }
    }
}