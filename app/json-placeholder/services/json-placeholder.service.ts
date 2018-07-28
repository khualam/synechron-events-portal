import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

import { Post } from "../models/post";

@Injectable()
export class JsonPlaceHolderService {

    constructor(private _http:Http) {

     }
     private serviceUrl:string="https://jsonplaceholder.typicode.com/";
     getAllPost():Observable<Post[]>{
         return this._http.get(this.serviceUrl+'posts').map(res=>res.json());
     }
}