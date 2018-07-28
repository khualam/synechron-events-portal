import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EventListComponent } from "./components/events-list.component";
import { EventDetailsComponent } from "./components/eventDetails-list.component";

const eventsRouteConfig:Routes=[
    {
        path:'',
        component: EventListComponent
    },
     {
        path:':id',
        component: EventDetailsComponent
    },
];

export const eventsRouting:ModuleWithProviders=RouterModule.forChild(eventsRouteConfig);