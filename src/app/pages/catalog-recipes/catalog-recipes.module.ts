import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRecipesRoutingModule } from './catalog-recipes-routing.module';
import {CatalogRecipesComponent} from "./catalog-recipes.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [CatalogRecipesComponent],
  imports: [
    CommonModule,
    CatalogRecipesRoutingModule,
    SharedModule
  ]
})
export class CatalogRecipesModule { }
