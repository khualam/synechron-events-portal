"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event = (function () {
    function Event(_id, eventId, eventCode, eventName, description, startDate, endDate, fees, ratings, imageUrl) {
        this._id = _id;
        this.eventId = eventId;
        this.eventCode = eventCode;
        this.eventName = eventName;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.fees = fees;
        this.ratings = ratings;
        this.imageUrl = imageUrl;
    }
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=event.js.map