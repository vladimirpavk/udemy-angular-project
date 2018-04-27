import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  private id:number;
  private editMode:boolean = false;

  private recipeForm:FormGroup;

  constructor(private route:ActivatedRoute,
              private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id=+params['id'];     
        this.editMode = params['id'] != null;   
        this.formInit();   
      }
    )    
  }

  private formInit(){
    let formData = {
      name: '',
      description: '',
      imagePath: '',
    };

    if(this.editMode){
      let recipeTemp:Recipe = this.recipeService.getRecipeById(this.id);
      formData.name=recipeTemp.name;
      formData.description=recipeTemp.description;
      formData.imagePath=recipeTemp.imagePath;
    }

    this.recipeForm=new FormGroup({
      'name': new FormControl(formData.name),
      'description': new FormControl(formData.description),
      'imagePath': new FormControl(formData.imagePath)    
    });
  }

  private formSubmitted():void{
      console.log(this.recipeForm);
  }

}



