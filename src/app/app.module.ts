import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AuthInterceptor } from './shared/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpModule,
    HttpClientModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
