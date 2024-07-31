import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FooterComponent} from "./components/footer/footer.component";
import {ErrorComponent} from "./components/error/error.component";
import {NotificationComponent} from "./components/notification/notification.component";
import {RecipeDetailComponent} from "./components/recipe-detail/recipe-detail.component";
import {RecomendetRecipeComponent} from "./components/recomendet-recipe/recomendet-recipe.component";
import {InputTextModule} from 'primeng/inputtext';
import { FormComponent } from './components/form/form.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    InputTextModule,
    MatButtonModule
  ],
  declarations: [
    ErrorComponent,
    NotificationComponent,
    RecipeDetailComponent,
    RecomendetRecipeComponent,
    FooterComponent,
    HeaderComponent,
    FormComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    InputTextModule,
    FormComponent,
    MatButtonModule,
    NotificationComponent
  ],
})
export class SharedModule {
}
