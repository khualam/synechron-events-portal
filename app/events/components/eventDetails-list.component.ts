import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Event } from "../models/event";
import{ EventService } from"../services/event.service";

@Component({
    selector: 'event-details',
    templateUrl: 'app/events/views/eventDetails-ilst.component.html'
})

export class EventDetailsComponent implements OnInit {
    constructor(private _eventsService: EventService, private route:ActivatedRoute){

    }
    id:string;
    getSingleEvent(): void{
        this.route.params.subscribe(param=>{
            this.id=param['id'];
        });
        this._eventsService.getSingleEvent(this.id).subscribe(
            data=>this.receivedEvent=data,
            err=>console.log(err),
            ()=>console.log('Service call completed')
        );
    }
    title:string="Synechron event Details";
    receivedEvent:Event;
ngOnInit(){
    this.getSingleEvent();
}
}

