"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var homeRoute = [
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    }
];
var eventRoute = [
    {
        path: 'events',
        loadChildren: 'app/events/events.module#EventsModule'
    }
];
var jsonPlaceHolderRoute = [
    {
        path: 'posts',
        loadChildren: 'app/json-placeholder/jsonPlaceHolder.module#JsonPlaceHolderModule'
    }
];
var parentRoute = [
    {
        path: 'parent',
        loadChildren: 'app/parent-child-communication/parentChild.module#ParentChildModule'
    }
];
var employeeRoute = [
    {
        path: 'employee',
        loadChildren: 'app/employees/employees.module#EmployeesModule'
    }
];
var defaultroutes = [
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
    }
];
var appRoutes = __assign({}, homeRoute, eventRoute, jsonPlaceHolderRoute, parentRoute, employeeRoute, defaultroutes);
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map