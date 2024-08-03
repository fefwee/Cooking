import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdministrationRoutingModule} from './administration-routing.module';
import {AdministrationComponent} from "./administration.component";
import {SharedModule} from "../../shared/shared.module";
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminRecipesComponent } from './admin-recipes/admin-recipes.component';


@NgModule({
  declarations: [AdministrationComponent, AdminUsersComponent, AdminRecipesComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule
  ]
})
export class AdministrationModule {
}
