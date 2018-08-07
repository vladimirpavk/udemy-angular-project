import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { MaterialsModule } from "../materials.module";

@NgModule({
    declarations: [ 
        SigninComponent,
        SignupComponent
     ],
     imports: [
         CommonModule,
         FormsModule,
         AuthRoutingModule,
         MaterialsModule
     ]
})
export class AuthModule {

}