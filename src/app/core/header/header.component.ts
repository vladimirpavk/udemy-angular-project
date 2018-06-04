import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../../recipes/services/recipe.service';
import { HttpService } from '../../shared/http.service';
import { Response } from '@angular/http';
import { Recipe } from '../../recipes/recipe.model';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  private isLoggedIn: boolean = false;
  private subs:Subscription;

  constructor(private recipeService: RecipeService,
              private httpService: HttpService,
              private authService: AuthService,
              private router: Router  ) { }

  ngOnInit() {    
    this.subs = this.authService.loggedInStatusChanged.subscribe(
      (status: boolean)=>{
        this.isLoggedIn=status;       
    })
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
    this.authService.logoutUser();
    this.router.navigate(['/recipes']);
  }
}
