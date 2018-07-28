"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var event_service_1 = require("../services/event.service");
var EventListComponent = (function () {
    // event: Event;
    function EventListComponent(_eventsService) {
        this._eventsService = _eventsService;
        this.eventsList = [];
        this.title = "Synechron";
        this.subTitle = "Training cntr";
        this.filterChar = '';
        // this.event = new Event(1, 'NG2SEM',
        //     'Angular2 Seminar', 'All new Features of Angular 2', new Date(), new Date(), 120, 78, 'images/ng2.png')
    }
    EventListComponent.prototype.ngOnInit = function () {
        this.displayAllEvents();
    };
    EventListComponent.prototype.selectedEvent = function (id) {
        var _this = this;
        this._eventsService.getSingleEvent(id).subscribe(function (data) { return _this.currentEvent = data; }, function (err) { return console.log(err); }, function () { return console.log('service call completed'); });
    };
    EventListComponent.prototype.displayAllEvents = function () {
        var _this = this;
        this._eventsService.getAllEvents().subscribe(function (data) { return _this.eventsList = data; }, function (err) { return console.log(err); }, function () { return console.log('service call completed'); });
    };
    return EventListComponent;
}());
EventListComponent = __decorate([
    core_1.Component({
        selector: 'events-list',
        templateUrl: 'app/events/views/event-list.component.html'
    }),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventListComponent);
exports.EventListComponent = EventListComponent;
//# sourceMappingURL=events-list.component.js.map