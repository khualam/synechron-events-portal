import { Component, OnInit} from "@angular/core";

import { Event } from "../models/event";
import { EventService } from "../services/event.service";

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/views/event-list.component.html'

})
export class EventListComponent implements OnInit{
    // event: Event;
    constructor(private _eventsService: EventService) {
        // this.event = new Event(1, 'NG2SEM',
        //     'Angular2 Seminar', 'All new Features of Angular 2', new Date(), new Date(), 120, 78, 'images/ng2.png')
    }
     
    


    ngOnInit(){
        this.displayAllEvents();
        
    }
     
    eventsList:Event[]=[];
    title: string = "Synechron";
    subTitle: string = "Training cntr";

    currentEvent:Event;
    filterChar:string='';

    selectedEvent(id:number){
       this._eventsService.getSingleEvent(id).subscribe(
          data=>this.currentEvent=data,
          err=>console.log(err),
          ()=>console.log('service call completed')
       );

    }

    displayAllEvents(){
      this._eventsService.getAllEvents().subscribe(
          data=>this.eventsList=data,
          err=>console.log(err),
          ()=>console.log('service call completed')

      );
       
    }
} 