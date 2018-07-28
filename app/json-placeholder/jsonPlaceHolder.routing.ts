import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { JphPostsComponent } from "./components/jph-posts.components";

const JsonPlaceHolderRouteConfig:Routes=[
    {
        path:'',
        component: JphPostsComponent
    },
];

export const JsonPlaceHolderRouting:ModuleWithProviders=RouterModule.forChild(JsonPlaceHolderRouteConfig);