import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from "./shared/components/error/error.component";
import {NoaccessComponent} from "./shared/components/noaccess/noaccess.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main.module').then(
        (m) => m.MainModule
      ),
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./pages/catalog-recipes/catalog-recipes.module').then(
        (m) => m.CatalogRecipesModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterModule),
  },
  {
    path: 'authorization',
    loadChildren: () =>
      import('./pages/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: 'create-recipe',
    loadChildren: () =>
      import('./pages/create-recipe/create-recipe.module').then(
        (m) => m.CreateRecipeModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },
  {
    path: 'noaccess',
    component: NoaccessComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
