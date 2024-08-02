import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRecipeRoutingModule } from './create-recipe-routing.module';
import {CreateRecipeComponent} from "./create-recipe.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [CreateRecipeComponent],
  imports: [
    CommonModule,
    CreateRecipeRoutingModule,
    SharedModule
  ]
})
export class CreateRecipeModule { }
