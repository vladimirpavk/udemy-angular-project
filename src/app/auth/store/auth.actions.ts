import { Action } from '@ngrx/store';

export const SIGN_UP_USER = 'SIGN_UP_USER'; 
export const SIGN_IN_USER ='SIGN_IN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SET_TOKEN = 'SET_TOKEN';

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

export type AuthActions = SignInUser | SignUpUser | LogOutUser | SetToken;
