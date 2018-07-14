import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as AppReducers from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private store:Store<AppReducers.AppState>) { }

  ngOnInit() {
  }

  formSubmitted(form: NgForm){
    //this.authService.signupUser(form.value.email, form.value.password);
    //console.log(form.value.email + '-' + form.value.password);
    this.store.dispatch(new AuthActions.TrySignUpUser({
      username:form.value.email,
      password: form.value.password
    }));
  }

}
