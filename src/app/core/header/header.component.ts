import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../../recipes/services/recipe.service';
import { HttpService } from '../../shared/http.service';
import { Response } from '@angular/http';
import { Recipe } from '../../recipes/recipe.model';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthAction from '../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  private isLoggedIn: boolean = false;
  private subs:Subscription;

  private authStore: Observable<fromAuth.AuthState>;

  constructor(private recipeService: RecipeService,
              private httpService: HttpService,
              private authService: AuthService,
              private router: Router,
              private store: Store<fromApp.AppState>
            ) { }

  ngOnInit() {    
    
    this.authStore=this.store.select('authState');
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  onFetchDataClicked(){
   this.httpService.loadRecipes()
   .subscribe(
      (response:Recipe[])=>{    
        this.recipeService.putRecipes(response);
      }
    );   
  }

  onSaveDataClicked(){
    this.httpService.storeRecipes(this.recipeService.getRecipes()).subscribe(
      (recipes:Recipe[])=>{
        console.log(recipes);        
      });
    }

  logoutButtonClicked(){
    //this.authService.logoutUser();
    this.store.dispatch(new AuthAction.LogOutUser());
    this.router.navigate(['/']);
  }
}
