import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'events-home',
    templateUrl: 'app/home/views/home.component.html',
    styleUrls:['app/home/css/home.component.css']
})

export class HomeComponent implements OnInit {
    constructor() { }
    title: string="Welcome To Synechron Events Portal";

    ngOnInit() { }
}