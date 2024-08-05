import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {AuthUserService} from "./services/auth-user.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsModule} from "@ngxs/store";
import {UserState} from "./store/store";
import {GetUsersService} from "./services/get-users.service";
import {GetRecipeService} from "./services/get-recipe.service";
import {AuthInterseptorInterceptor} from "./interseptors/auth-interseptor.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxsModule.forRoot([UserState]),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [AuthUserService, GetUsersService, GetRecipeService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterseptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
