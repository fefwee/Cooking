import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorComponent} from "./components/error/error.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {NotificationComponent} from "./components/notification/notification.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecomendetRecipeComponent } from './components/recomendet-recipe/recomendet-recipe.component';

@NgModule({
  declarations: [
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    NotificationComponent,
    RecipeDetailComponent,
    RecomendetRecipeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule

  ],
  exports: [
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    NotificationComponent,
    RecipeDetailComponent,
    RecomendetRecipeComponent
  ]
})
export class SharedModule {
}
