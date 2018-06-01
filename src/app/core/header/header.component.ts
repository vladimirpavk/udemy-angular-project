import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../../recipes/services/recipe.service';
import { HttpService } from '../../shared/http.service';
import { Response } from '@angular/http';
import { Recipe } from '../../recipes/recipe.model';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
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
        //console.log(response);
        this.recipeService.putRecipes(response);
      }
    );   
  }

  /*onSaveDataClicked(){
    this.httpService.storeRecipes(this.recipeService.getRecipes()).subscribe(
      (response:Response)=>{
        console.log(response);
      }
    )*/  

  logoutButtonClicked(){
    this.authService.logoutUser();
    this.router.navigate(['/recipes']);
  }
}
