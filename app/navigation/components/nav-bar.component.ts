import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/navigation/views/nav-bar.component.html'
})

export class NavBarComponent implements OnInit {
    constructor() { }
    logo: string="Synechron";

    ngOnInit() { }
}