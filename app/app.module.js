"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_1 = require("./app.routing");
//Custom Components
var app_component_1 = require("./app.component");
var nav_bar_component_1 = require("./navigation/components/nav-bar.component");
var nav_bar_footer_component_1 = require("./navigation/components/nav-bar-footer.component");
//Custom modules
// import { HomeModule } from './home/home.module';
// import { EventsModule } from './events/events.module';
// import { JsonPlaceHolderModule } from './json-placeholder/jsonPlaceHolder.module';
// import { ParentChildModule } from './parent-child-communication/parentChild.module';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_1.routing],
        declarations: [app_component_1.AppCpmonent, nav_bar_footer_component_1.NavBarFooterComponent, nav_bar_component_1.NavBarComponent],
        exports: [],
        providers: [],
        bootstrap: [app_component_1.AppCpmonent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map