import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthHomeComponent } from './auth/auth-home/auth-home.component';
import { MainProfileComponent } from './profile/main-profile/main-profile.component';
import { routing, appRoutingProviders } from "app/app.routing";
import { AUTH_PROVIDERS } from "angular2-jwt";
import { Auth } from "app/services/auth.service";
import { AuthGuard } from "app/auth.gaurd";

@NgModule({
  declarations: [
    AppComponent,
    AuthHomeComponent,
    MainProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    AUTH_PROVIDERS,
    Auth,
    AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
