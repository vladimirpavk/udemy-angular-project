import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
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
              private router:Router,
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
      recipeIngridients: new FormArray([])
    };

    if(this.editMode){
      let recipeTemp:Recipe = this.recipeService.getRecipeById(this.id);
      formData.name=recipeTemp.name;
      formData.description=recipeTemp.description;
      formData.imagePath=recipeTemp.imagePath;
      if(recipeTemp['ingridients']){
        for(let ingridient of recipeTemp.ingridients){
          formData.recipeIngridients.push(
            new FormGroup({
              name: new FormControl(ingridient.name, Validators.required),
              amount: new FormControl(ingridient.amount, [Validators.required, Validators.min(0), Validators.max(10)])
            })
          );
        }
      }
    }

    this.recipeForm=new FormGroup({
      'name': new FormControl(formData.name, Validators.required),
      'description': new FormControl(formData.description, Validators.required),
      'imagePath': new FormControl(formData.imagePath, Validators.required),
      'ingridients': formData.recipeIngridients  
    });
  }

  private formSubmitted():void{
      /*console.log(this.recipeForm);
      console.log((<FormArray>this.recipeForm.get('ingridients')).controls);*/
      if(this.editMode){
        this.recipeService.updateRecipe(this.id, this.recipeForm.value);
      }
      else{
        this.recipeService.addNewRecipe(this.recipeForm.value);
      }
      
      this.router.navigate(['../'], {relativeTo: this.route});
  }

  private onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private onDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

  private addIngridient():void{
    (<FormArray>this.recipeForm.get('ingridients')).controls.push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)])
      })
    )
  }

}



