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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var EventService = (function () {
    function EventService(_http) {
        this._http = _http;
        this._serviceUrl = "http://localhost:9090/api/events";
    }
    //     private eventData:Event[]=[
    //     {
    //         eventId:1,
    //         eventCode:'NG2SEM',
    //         eventName:'A2 training',
    //         description:'All new features',
    //         startDate:new Date(),
    //         endDate:new Date(),
    //         fees:120,
    //         ratings:78,
    //         imageUrl:'images/ng2.png'
    //     },
    //     {
    //         eventId:2,
    //         eventCode:'NG2SEM1',
    //         eventName:'java training',
    //         description:'All new features',
    //         startDate:new Date(),
    //         endDate:new Date(),
    //         fees:121,
    //         ratings:80,
    //         imageUrl:'images/ng2.png'
    //     },
    //      {
    //         eventId:3,
    //         eventCode:'NG2SEM2',
    //         eventName:'node training',
    //         description:'All new features',
    //         startDate:new Date(),
    //         endDate:new Date(),
    //         fees:125,
    //         ratings:85,
    //         imageUrl:'images/ng2.png'
    //     },
    //      {
    //         eventId:4,
    //         eventCode:'NG2SEM3',
    //         eventName:'.net training',
    //         description:'All new features',
    //         startDate:new Date(),
    //         endDate:new Date(),
    //         fees:140,
    //         ratings:90,
    //         imageUrl:'images/ng2.png'
    //     },
    //      {
    //         eventId:5,
    //         eventCode:'NG2SEM4',
    //         eventName:'A4 training',
    //         description:'All new features',
    //         startDate:new Date(),
    //         endDate:new Date(),
    //         fees:179,
    //         ratings:65,
    //         imageUrl:'images/ng2.png'
    //     },
    // ];
    EventService.prototype.getAllEvents = function () {
        return this._http.get(this._serviceUrl).map(function (res) { return res.json(); });
    };
    EventService.prototype.getSingleEvent = function (id) {
        return this._http.get(this._serviceUrl + '/' + id).map(function (res) { return res.json(); });
    };
    return EventService;
}());
EventService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map