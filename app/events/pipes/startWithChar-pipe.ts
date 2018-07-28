import { Pipe, PipeTransform } from "@angular/core"

import { Event } from "../models/event";
@Pipe({
    name: 'startWithFilter'
})

export class StartWithCharPipe implements PipeTransform {
    transform(value: Event[], args: string): Event[] {
        let filter: string = args ? args.toLocaleLowerCase() : null;
        let searchPattern = new RegExp('^' + filter, 'i');
        return filter ? value.filter((event: Event) =>
           searchPattern.test(event.eventName.toLocaleLowerCase())==true):value;
    }
}