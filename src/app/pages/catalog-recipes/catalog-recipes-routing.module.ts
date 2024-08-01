import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogRecipesComponent} from "./catalog-recipes.component";
import {RecipeDetailComponent} from "../../shared/components/recipe-detail/recipe-detail.component";

const routes: Routes = [
  {
    path: '',
    component: CatalogRecipesComponent
  },
  {
    path: ':id',
    component: RecipeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRecipesRoutingModule {
}
