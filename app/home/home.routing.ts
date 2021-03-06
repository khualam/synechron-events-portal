import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { HomeComponent } from "./components/home.component";

const homeRouteConfig:Routes=[
    {
        path:'',
        component: HomeComponent
    }
];

export const homeRouting:ModuleWithProviders=RouterModule.forChild(homeRouteConfig);