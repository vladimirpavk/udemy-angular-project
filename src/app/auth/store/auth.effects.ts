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
            return fromPromise(firebase.auth().signInWithEmailAndPassword(payload.username, payload.password));
        }),
        switchMap((user:any)=>{
            return [ 
                {
                    "type": AuthActions.FIRST_TIME_SIGN_IN_USER
                },
                {
                    "type": AuthActions.SIGN_IN_USER
                },
                {
                    "type": AuthActions.SET_TOKEN,
                    "payload": user.G
                }
            ]
        }),
        catchError((err:any)=>{
            return of(new AuthActions.FirstTimeSignInUser());
        })

   /* @Effect() public authSignin =  this.actions.ofType(AuthActions.TRY_SIGN_IN_USER)
        .map((action: AuthActions.TrySignInUser)=>{
            console.log("First step");
            return (<AuthActions.TrySignInUser>action).payload
        })
        .mergeMap((payload: {username:string, password:string})=>{
            return firebase.auth().signInWithEmailAndPassword(payload.username, payload.password)
               .then((user:any)=>{
                return Observable.from([ 
                    {
                        "type": AuthActions.FIRST_TIME_SIGN_IN_USER
                    },
                    {
                        "type": AuthActions.SIGN_IN_USER
                    },
                    {
                        "type": AuthActions.SET_TOKEN,
                        "payload": user.G
                    }
                ])
                /*return{
                    type:AuthActions.SET_TOKEN,
                    payload: user.G
                }          
               })
               .catch((err)=>{
                   return{
                       type:AuthActions.FIRST_TIME_SIGN_IN_USER
                   }
               })
        });*/
        
        
        
        /*.switchMap(
            (payload:{username:string, password:string})=>{
                console.log("Trying to signin");
               // return fromPromise(firebase.auth().signInWithEmailAndPassword(payload.username, payload.password));
               firebase.auth().signInWithEmailAndPassword(payload.username, payload.password)
               .then(()=>{

               })
               .catch((err)=>{
                   console.log(err);
               })
            }
        )    
        .switchMap(()=>{
            console.log("Switch map");
            return fromPromise(firebase.auth().currentUser.getIdToken());
        })
        .mergeMap((token:string)=>{      
            console.log("Where the token is: " + token);
            return [
                {
                    type:AuthActions.SIGN_IN_USER
                },
                {
                    type:AuthActions.SET_TOKEN,
                    payload: token
                }
            ]
        });*/

    
}