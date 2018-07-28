"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home.component");
var homeRouteConfig = [
    {
        path: '',
        component: home_component_1.HomeComponent
    }
];
exports.homeRouting = router_1.RouterModule.forChild(homeRouteConfig);
//# sourceMappingURL=home.routing.js.map