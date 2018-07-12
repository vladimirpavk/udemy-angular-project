import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { Observable } from 'rxjs/Observable';
import * as AuthReducer from '../store/auth.reducers';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private logInError = false;

  private loggedInStatusChanged:Observable<AppState["authState"]>;

  constructor(private authService:AuthService,
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
          this.logInError = true;
        }
      }
    )
  }

  formSubmitted(form: NgForm){
    this.authService.signinUser(form.value.email, form.value.password);
  }

}
