import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './login/login.component';
import {SigninComponent} from './signin/signin.component';
import {MainComponent} from './main/main.component';

const appRoutes: Routes = [
{
  path: '',
  component: LoginComponent
},
{
  path: 'sign-in',
  component: SigninComponent
},
{
  path:'login',
  component: LoginComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
