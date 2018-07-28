import { Injectable } from '@angular/core';
import { Event } from "../models/event";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class EventService {

   constructor(private _http:Http){
   }

   private _serviceUrl:string="http://localhost:9090/api/events";
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

    getAllEvents(): Observable<Event[]>{
        return this._http.get(this._serviceUrl).map(res=>res.json());
    }

    getSingleEvent(id:string):Observable<Event>{
       return this._http.get(this._serviceUrl+'/'+id).map(res=>res.json());
    }
}