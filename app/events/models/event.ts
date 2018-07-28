export class Event {
    constructor(
        public _id:string,
        public eventId?: number,
        public eventCode?: string,
        public eventName?: string,
        public description?: string,
        public startDate?: Date,
        public endDate?: Date,
        public fees?: number,
        public ratings?: number,
        public imageUrl?: string
    ) {


    }
}