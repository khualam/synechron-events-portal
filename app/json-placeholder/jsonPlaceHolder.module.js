"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var jph_posts_components_1 = require("./components/jph-posts.components");
var json_placeholder_service_1 = require("./services/json-placeholder.service");
var common_1 = require("@angular/common");
var jsonPlaceHolder_routing_1 = require("./jsonPlaceHolder.routing");
var JsonPlaceHolderModule = (function () {
    function JsonPlaceHolderModule() {
    }
    return JsonPlaceHolderModule;
}());
JsonPlaceHolderModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, jsonPlaceHolder_routing_1.JsonPlaceHolderRouting],
        exports: [jph_posts_components_1.JphPostsComponent],
        declarations: [jph_posts_components_1.JphPostsComponent],
        providers: [json_placeholder_service_1.JsonPlaceHolderService],
    })
], JsonPlaceHolderModule);
exports.JsonPlaceHolderModule = JsonPlaceHolderModule;
//# sourceMappingURL=jsonPlaceHolder.module.js.map