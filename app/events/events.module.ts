import { NgModule } from '@angular/core';
import { EventListComponent } from "./components/events-list.component";
import { EventDetailsComponent } from "./components/eventDetails-list.component";
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { eventsRouting } from "./events.routing"


import { FirstLetterCapitalPipe } from "./pipes/first-letter-capital.pipe";
import { StartWithCharPipe } from "./pipes/startWithChar-pipe";
import { FilterByPipe } from "./pipes/filter-by-pipe";

import { EventService } from "./services/event.service";

@NgModule({
    imports: [FormsModule, HttpModule,CommonModule, RouterModule, eventsRouting],
    exports: [EventListComponent],
    declarations: [EventListComponent, EventDetailsComponent, FirstLetterCapitalPipe, StartWithCharPipe, FilterByPipe],
    providers: [EventService],
})
export class EventsModule { }
