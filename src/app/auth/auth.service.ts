import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import { Injectable } from '@angular/core';

import * as AuthReducers from './store/auth.reducers';
import * as AuthActions from './store/auth.actions';

@Injectable()
export class AuthService{

    constructor(private store:Store<AppState>){        
    }

    public signupUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                (ok)=>{
                    //console.log(ok)
                    this.store.dispatch(new AuthActions.SignUpUser());
                })
            .catch(
                (err)=>{
                    console.log(err)
                });
    }

    public signinUser(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((ok)=>{
            this.store.dispatch(new AuthActions.SignUpUser())

                /*this.userLoggedIn = true;
                this.loggedInStatusChanged.next(true);
                this.token=ok.G*/
                
            this.store.dispatch(new AuthActions.SetToken(ok.G));
        })
        .catch((err)=>{
            /*this.userLoggedIn = false;
            this.loggedInStatusChanged.next(false);*/
            this.store.dispatch(new AuthActions.LogOutUser());
        });
    }

    public logoutUser(){
        /*this.userLoggedIn = false;
        this.token = '';
        this.loggedInStatusChanged.next(false);*/
        this.store.dispatch(new AuthActions.LogOutUser());
    }
}