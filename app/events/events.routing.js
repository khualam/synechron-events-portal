"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var events_list_component_1 = require("./components/events-list.component");
var eventDetails_list_component_1 = require("./components/eventDetails-list.component");
var eventsRouteConfig = [
    {
        path: '',
        component: events_list_component_1.EventListComponent
    },
    {
        path: ':id',
        component: eventDetails_list_component_1.EventDetailsComponent
    },
];
exports.eventsRouting = router_1.RouterModule.forChild(eventsRouteConfig);
//# sourceMappingURL=events.routing.js.map