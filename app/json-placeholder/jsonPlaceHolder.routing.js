"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var jph_posts_components_1 = require("./components/jph-posts.components");
var JsonPlaceHolderRouteConfig = [
    {
        path: '',
        component: jph_posts_components_1.JphPostsComponent
    },
];
exports.JsonPlaceHolderRouting = router_1.RouterModule.forChild(JsonPlaceHolderRouteConfig);
//# sourceMappingURL=jsonPlaceHolder.routing.js.map