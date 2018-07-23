import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AuthActions from './auth.actions';
import * as firebase from 'firebase';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects{

    constructor(private actions:Actions){}

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

    @Effect() public authSignin = 
    this.actions.pipe(
        ofType(AuthActions.TRY_SIGN_IN_USER),
        map((action:AuthActions.TrySignInUser)=>{
            console.log("First map");
            return (<AuthActions.TrySignInUser>action).payload;
        }),
        switchMap((payload: {username:string, password:string})=>{
            return fromPromise(firebase.auth().signInWithEmailAndPassword(payload.username, payload.password)).pipe(
                switchMap((user:any)=>{
                    return [ 
                        new AuthActions.FirstTimeSignInUser(),
                        new AuthActions.SignInUser(payload.username, payload.password),
                        new AuthActions.SetToken(user.G)
                    ]
                }),
                catchError((err:any)=>{
                    return of(new AuthActions.FirstTimeSignInUser());
                })
            )
        }));
}