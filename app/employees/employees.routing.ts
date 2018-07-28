import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { EmployeesComponent } from './components/employees.component';

const employeesRoutingConfig: Routes = [
  { path: 'path', 
  component: EmployeesComponent
 },
];

export const employeeRouting:ModuleWithProviders=RouterModule.forChild(employeesRoutingConfig);