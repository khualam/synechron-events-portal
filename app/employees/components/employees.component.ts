import { Component, OnInit } from '@angular/core';

import { Employee } from "../models/employee"

@Component({
    selector: 'new-employee',
    templateUrl: 'app/employees/views/new-employee.component.html',
    styles:['input.ng-valid {border-left:3px solid green} input.ng-invalid{ border-left:3px solid red}']
})

export class EmployeesComponent implements OnInit {
    constructor() { }

    employee: Employee=new Employee();

    onsubmit(){
        console.log(this.employee.employeeForm.value);
    }

    ngOnInit() { }
}