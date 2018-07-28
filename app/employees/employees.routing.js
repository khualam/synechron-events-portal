"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var employees_component_1 = require("./components/employees.component");
var employeesRoutingConfig = [
    { path: 'path',
        component: employees_component_1.EmployeesComponent
    },
];
exports.employeeRouting = router_1.RouterModule.forChild(employeesRoutingConfig);
//# sourceMappingURL=employees.routing.js.map