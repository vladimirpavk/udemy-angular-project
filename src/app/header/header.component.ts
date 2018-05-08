import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../recipes/services/recipe.service';
import { HttpService } from '../shared/http.service';
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

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
              private authService: AuthService  ) { }

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
    this.httpService.loadRecipes().map(
      (response:Response)=>{
        let recipes:Recipe[] = <Recipe[]>(response.json());
        for(let x of recipes){
          if(!x.ingridients)
          {
            x.ingridients =[];
          }
        }
        return recipes;
      }
    ).subscribe(
      (response:Recipe[])=>{        
        this.recipeService.putRecipes(response);
      }
    );   
  }

  onSaveDataClicked(){
    this.httpService.storeRecipes(this.recipeService.getRecipes()).subscribe(
      (response:Response)=>{
        console.log(response);
      }
    )
  }

  logoutButtonClicked(){
    this.authService.logoutUser();
  }
}
