import { NgModule } from '@angular/core';
import {  Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
    {path:'signup', component:RegisterComponent},
 {path:'dashboard',loadChildren:()=>import('./components/dashboard/dashboard.module').then(m=>m.DashboardModule)}


];


