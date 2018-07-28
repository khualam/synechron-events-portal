"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var parent_component_1 = require("./components/parent.component");
var ParentChildRouteConfig = [
    {
        path: '',
        component: parent_component_1.ParentComponent
    },
];
exports.parentChildRouting = router_1.RouterModule.forChild(ParentChildRouteConfig);
//# sourceMappingURL=parentChild.routing.js.map