import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { Observable } from 'rxjs';
import * as AuthReducer from '../store/auth.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private logInError:boolean = false;

  private loggedInStatusChanged:Observable<AppState["authState"]>;

  constructor(
              private router: Router,
              private store: Store<AppState>
            ) { }

  ngOnInit() {

    this.loggedInStatusChanged = this.store.select('authState');

    this.loggedInStatusChanged.subscribe(
      (status:AuthReducer.AuthState)=>{
        if(status["userLoggedIn"]){
          this.router.navigate(['/recipes']);
          this.logInError = false;
        }
        else
        {
          if(!status["alreadyAttemptedToLogIn"]){
            this.logInError = false;
          }
          else{
            this.logInError = true;
          }          
        }
      }
    )
  }

  formSubmitted(form: NgForm){
    //this.authService.signinUser(form.value.email, form.value.password);   
    console.log("Try sign in");
    this.store.dispatch(new AuthActions.TrySignInUser({username:form.value.email, password:form.value.password}));
  }

}
