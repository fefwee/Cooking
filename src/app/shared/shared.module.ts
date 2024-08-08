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
import { SliderComponent } from './components/slider/slider.component';
import { BestRecipeComponent } from './components/best-recipe/best-recipe.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { DeliciousRecipesComponent } from './components/delicious-recipes/delicious-recipes.component';
import { WhyWeComponent } from './components/why-we/why-we.component';
import { GetNewRecipeComponent } from './components/get-new-recipe/get-new-recipe.component';
import { OtherRecipeComponent } from './components/other-recipe/other-recipe.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ModalNotificationComponent } from './components/modal-notification/modal-notification.component';
import { FormRecipeComponent } from './components/form-recipe/form-recipe.component';
import { TableModule } from 'primeng/table';
import { SingleUserComponent } from './components/single-user/single-user.component';
import {TimePipe} from "../pipes/time.pipe";
import { InputTextareaModule } from 'primeng/inputtextarea';
import { NoaccessComponent } from './components/noaccess/noaccess.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    InputTextModule,
    MatButtonModule,
    TableModule,
    InputTextareaModule
  ],
  declarations: [
    TimePipe,
    ErrorComponent,
    NotificationComponent,
    RecipeDetailComponent,
    RecomendetRecipeComponent,
    FooterComponent,
    HeaderComponent,
    FormComponent,
    SliderComponent,
    BestRecipeComponent,
    RecipeItemComponent,
    DeliciousRecipesComponent,
    WhyWeComponent,
    GetNewRecipeComponent,
    OtherRecipeComponent,
    CommentsComponent,
    ModalNotificationComponent,
    FormRecipeComponent,
    SingleUserComponent,
    NoaccessComponent,
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
    NotificationComponent,
    SliderComponent,
    BestRecipeComponent,
    RecipeItemComponent,
    DeliciousRecipesComponent,
    WhyWeComponent,
    GetNewRecipeComponent,
    OtherRecipeComponent,
    CommentsComponent,
    ErrorComponent,
    ModalNotificationComponent,
    FormRecipeComponent,
    TableModule,
    SingleUserComponent,
    TimePipe,
    InputTextareaModule
  ],
})
export class SharedModule {
}
