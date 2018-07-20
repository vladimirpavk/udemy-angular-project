import { Action } from '@ngrx/store';

export const TRY_SIGN_UP_USER = 'TRY_SIGN_UP_USER';
export const TRY_SIGN_IN_USER ='TRY_SIGN_IN_USER';
export const FIRST_TIME_SIGN_IN_USER ='FIRST_TIME_SIGN_IN_USER';
export const SIGN_UP_USER = 'SIGN_UP_USER'; 
export const SIGN_IN_USER ='SIGN_IN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignUpUser implements Action{
    public readonly type:string = TRY_SIGN_UP_USER;
    constructor(public payload: { username : string, password : string}){}
}

export class TrySignInUser implements Action{
    public readonly type:string = TRY_SIGN_IN_USER;
    constructor(public payload: { username : string, password : string}){}
}

export class FirstTimeSignInUser implements Action{
    public readonly type:string = FIRST_TIME_SIGN_IN_USER;
    constructor(){}
}

export class SignUpUser implements Action{
    public readonly type:string = SIGN_UP_USER;
    constructor(){}
}

export class SignInUser implements Action{
    public readonly type:string = SIGN_IN_USER;
    constructor(public username:string, public password:string){}
}

export class LogOutUser implements Action{
    public readonly type:string = LOGOUT_USER;
    constructor(){}
}

export class SetToken implements Action{
    public readonly type:string = SET_TOKEN;
    constructor(public payload:string){}
}

export type AuthActions = SignInUser | SignUpUser | LogOutUser | SetToken | TrySignUpUser | TrySignInUser | FirstTimeSignInUser;
