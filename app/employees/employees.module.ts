import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { employeeRouting } from "./employees.routing"

import { EmployeesComponent } from './components/employees.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, employeeRouting],
    exports: [],
    declarations: [EmployeesComponent],
    providers: [],
})
export class EmployeesModule { }
