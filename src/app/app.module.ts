import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MainContentResolver} from './components/products/main/main-content-resolver.service';
import {ApiFetcherServiceService} from './services/ApiFetcherService.service';
import { LoginComponent } from './security/login/login.component';
import {AuthGuard} from './services/security/auth-guard.service';
import {AuthenticationService} from './services/security/Authentication.service';
import {AuthTokenInterceptorService} from './services/security/auth-token-interceptor.service';
import {AlreadyLoggedInGuard} from './services/security/already-logged-in-guard.service';
import { HomeComponent } from './components/home/home.component';
import {ProductsModule} from './components/products/products.module';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './components/shared/shared.module';
import {CreateResolverService} from './components/products/create/create-resolver.service';
import {LoginModule} from './security/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProductsModule,
    LoginModule,
    SharedModule
  ],
  providers: [MainContentResolver, CreateResolverService, ApiFetcherServiceService, AuthGuard, AlreadyLoggedInGuard, AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
