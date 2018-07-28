"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var json_placeholder_service_1 = require("../services/json-placeholder.service");
var JphPostsComponent = (function () {
    function JphPostsComponent(_jsonPlaceHoplderService) {
        this._jsonPlaceHoplderService = _jsonPlaceHoplderService;
        this.title = "";
    }
    JphPostsComponent.prototype.displayAllPosts = function () {
        var _this = this;
        this._jsonPlaceHoplderService.getAllPost().subscribe(function (data) { return _this.posts = data; }, function (err) { return console.log(err); }, function () { return console.log('Service call complted'); });
    };
    JphPostsComponent.prototype.ngOnInit = function () {
        this.displayAllPosts();
    };
    return JphPostsComponent;
}());
JphPostsComponent = __decorate([
    core_1.Component({
        selector: 'jph-post',
        templateUrl: 'app/json-placeholder/views/jph-posts.component.html'
    }),
    __metadata("design:paramtypes", [json_placeholder_service_1.JsonPlaceHolderService])
], JphPostsComponent);
exports.JphPostsComponent = JphPostsComponent;
//# sourceMappingURL=jph-posts.components.js.map