import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthHomeComponent } from "app/auth/auth-home/auth-home.component";
import { MainProfileComponent } from "app/profile/main-profile/main-profile.component";

const appRoute: Routes= [
    { path: '', component:AuthHomeComponent},
    { path: 'profile', component:MainProfileComponent}

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);