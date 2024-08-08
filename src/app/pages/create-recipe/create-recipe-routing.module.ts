import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateRecipeComponent} from "./create-recipe.component";
import {roleAccessGuard} from "../../guards/role-model";

const routes: Routes = [
  {
    path: '',
    component: CreateRecipeComponent,
    canActivate: [roleAccessGuard],
    data: { requiredRole: 'registered' }  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRecipeRoutingModule {
}
