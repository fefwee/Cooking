import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdministrationComponent} from "./administration.component";
import {AdminUsersComponent} from "./admin-users/admin-users.component";
import {AdminRecipesComponent} from "./admin-recipes/admin-recipes.component";
import {FormRecipeComponent} from "../../shared/components/form-recipe/form-recipe.component";

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        component: AdminUsersComponent
      },
      {
        path: 'recipes',
        component: AdminRecipesComponent
      },
    ]
  },
  {
    path: 'recipes/:id',
    component: FormRecipeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {
}
