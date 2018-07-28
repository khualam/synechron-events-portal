"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var events_list_component_1 = require("./components/events-list.component");
var eventDetails_list_component_1 = require("./components/eventDetails-list.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var events_routing_1 = require("./events.routing");
var first_letter_capital_pipe_1 = require("./pipes/first-letter-capital.pipe");
var startWithChar_pipe_1 = require("./pipes/startWithChar-pipe");
var filter_by_pipe_1 = require("./pipes/filter-by-pipe");
var event_service_1 = require("./services/event.service");
var EventsModule = (function () {
    function EventsModule() {
    }
    return EventsModule;
}());
EventsModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, http_1.HttpModule, common_1.CommonModule, router_1.RouterModule, events_routing_1.eventsRouting],
        exports: [events_list_component_1.EventListComponent],
        declarations: [events_list_component_1.EventListComponent, eventDetails_list_component_1.EventDetailsComponent, first_letter_capital_pipe_1.FirstLetterCapitalPipe, startWithChar_pipe_1.StartWithCharPipe, filter_by_pipe_1.FilterByPipe],
        providers: [event_service_1.EventService],
    })
], EventsModule);
exports.EventsModule = EventsModule;
//# sourceMappingURL=events.module.js.map