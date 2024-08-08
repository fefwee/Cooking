import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdministrationComponent} from "./administration.component";
import {AdminUsersComponent} from "./admin-users/admin-users.component";
import {AdminRecipesComponent} from "./admin-recipes/admin-recipes.component";
import {FormRecipeComponent} from "../../shared/components/form-recipe/form-recipe.component";
import {SingleUserComponent} from "../../shared/components/single-user/single-user.component";
import {roleAccessGuard} from "../../guards/role-model";

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    canActivate: [roleAccessGuard],
    data: { requiredRole: 'admin' },
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        component: AdminUsersComponent,
        canActivate: [roleAccessGuard],
        data: { requiredRole: 'admin' }
      },
      {
        path: 'recipes',
        component: AdminRecipesComponent,
        canActivate: [roleAccessGuard],
        data: { requiredRole: 'admin' }
      },
    ]
  },
  {
    path: 'recipes/:id',
    component: FormRecipeComponent,
    canActivate: [roleAccessGuard],
    data: { requiredRole: 'admin' }
  },
  {
    path: 'users/:id',
    component: SingleUserComponent,
    canActivate: [roleAccessGuard],
    data: { requiredRole: 'admin' }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {
}
