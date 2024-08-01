import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
