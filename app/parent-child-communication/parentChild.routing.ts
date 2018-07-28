import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ParentComponent } from "./components/parent.component"; 

const ParentChildRouteConfig:Routes=[
    {
        path:'',
        component: ParentComponent
    },
];

export const parentChildRouting:ModuleWithProviders=RouterModule.forChild(ParentChildRouteConfig);