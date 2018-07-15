import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AuthActions from './auth.actions';
import * as firebase from 'firebase';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class AuthEffects{

    @Effect() public authSignup = 
    this.actions.ofType(AuthActions.TRY_SIGN_UP_USER)
    .map((action: AuthActions.TrySignUpUser)=>{
        return (<AuthActions.TrySignUpUser>action).payload
    })
    .switchMap(
        (payload:{username:string, password:string})=>{
            return fromPromise(firebase.auth().createUserWithEmailAndPassword(payload.username, payload.password))
        }
    )
    .switchMap(()=>{
        return fromPromise(firebase.auth().currentUser.getIdToken())
    })
    .mergeMap((token:string)=>{
        return [
            {
                type:AuthActions.SIGN_UP_USER
            },
            {
                type:AuthActions.SET_TOKEN,
                payload: token
            }
        ]
    });

    @Effect() public authSignin =  this.actions.ofType(AuthActions.TRY_SIGN_IN_USER)
        .map((action: AuthActions.TrySignInUser)=>{
            return (<AuthActions.TrySignInUser>action).payload
        })
        .switchMap(
            (payload:{username:string, password:string})=>{
                return fromPromise(firebase.auth().signInWithEmailAndPassword(payload.username, payload.password));
            }
        )
        .switchMap(()=>{
            return fromPromise(firebase.auth().currentUser.getIdToken());
        })
        .mergeMap((token:string)=>{           
            return [
                {
                    type:AuthActions.SIGN_IN_USER
                },
                {
                    type:AuthActions.SET_TOKEN,
                    payload: token
                }
            ]
        });

    constructor(private actions:Actions){}
}