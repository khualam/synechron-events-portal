import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppCpmonent } from './app.component';

import { NgModule } from '@angular/core';

const homeRoute: Routes = [
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule'
  }
];

const eventRoute: Routes = [
  {
    path: 'events',
    loadChildren: 'app/events/events.module#EventsModule'
  }
];

const jsonPlaceHolderRoute: Routes = [
  {
    path: 'posts',
    loadChildren: 'app/json-placeholder/jsonPlaceHolder.module#JsonPlaceHolderModule'
  }
];
const parentRoute: Routes = [
  {
    path: 'parent',
    loadChildren: 'app/parent-child-communication/parentChild.module#ParentChildModule'
  }
];

const employeeRoute: Routes = [
  {
    path: 'employee',
    loadChildren: 'app/employees/employees.module#EmployeesModule'
  }
];

const defaultroutes: Routes = [
  {
    path: '',
    loadChildren: 'app/home/home.module#HomeModule'
  }
];

const appRoutes: Routes = {
  ...homeRoute,
  ...eventRoute,
  ...jsonPlaceHolderRoute,
  ...parentRoute,
  ...employeeRoute,
  ...defaultroutes,
}


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);