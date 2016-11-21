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
var core_1 = require("@angular/core");
var MainCtrl = (function () {
    function MainCtrl() {
    }
    return MainCtrl;
}());
MainCtrl = __decorate([
    core_1.Component({
        selector: 'main',
        moduleId: module.id,
        templateUrl: '../views/main/index.html'
    }),
    __metadata("design:paramtypes", [])
], MainCtrl);
exports.MainCtrl = MainCtrl;
;
var MainBench1Ctrl = (function () {
    function MainBench1Ctrl(zone) {
        this.list = [];
        this.timeSpend = -1;
        this.zone = zone;
    }
    MainBench1Ctrl.prototype.benchmark = function () {
        var _this = this;
        var bufferList = [];
        var currentTime = new Date().getMilliseconds();
        this.list = [];
        for (var i = 0; i < 10000; i++) {
            bufferList.push({
                idx: i,
                text: 'ITEM ' + i
            });
        }
        this.zone.run(function () {
            _this.list = bufferList;
        });
        this.timeSpend = new Date().getMilliseconds() - currentTime;
        console.log(this.timeSpend);
    };
    return MainBench1Ctrl;
}());
MainBench1Ctrl = __decorate([
    core_1.Component({
        selector: 'main-bench-1',
        moduleId: module.id,
        templateUrl: '../views/main/benchmark/1.html'
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], MainBench1Ctrl);
exports.MainBench1Ctrl = MainBench1Ctrl;
;
var MainBench2Ctrl = (function () {
    function MainBench2Ctrl(zone) {
        var _this = this;
        this.list = [];
        this.timeSpend = -1;
        this.zone = zone;
        var bufferList = [];
        var currentTime = new Date().getMilliseconds();
        this.list = [];
        for (var i = 0; i < 10000; i++) {
            bufferList.push({
                idx: i,
                text: 'ITEM ' + i
            });
        }
        this.zone.run(function () {
            _this.list = bufferList;
        });
    }
    MainBench2Ctrl.prototype.benchmark = function () {
        for (var i = 0; i < 5000; i++) {
            var index = parseInt(Math.random() * this.list.length);
            this.list.splice(index, 1);
        }
    };
    return MainBench2Ctrl;
}());
MainBench2Ctrl = __decorate([
    core_1.Component({
        selector: 'main-bench-2',
        moduleId: module.id,
        templateUrl: '../views/main/benchmark/2.html'
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], MainBench2Ctrl);
exports.MainBench2Ctrl = MainBench2Ctrl;
;
var MainBench3Ctrl = (function () {
    function MainBench3Ctrl(zone) {
        this.list = [];
        this.timeSpend = -1;
        this.zone = zone;
    }
    MainBench3Ctrl.prototype.benchmark = function () {
        var _this = this;
        var bufferList = [];
        var currentTime = new Date().getMilliseconds();
        this.list = [];
        for (var i = 0; i < 1000; i++) {
            var subList = [];
            for (var j = 0; j < 20; j++) {
                subList.push({
                    idx: j,
                    text: 'ITEM ' + i + ', ' + j
                });
            }
            bufferList.push(subList);
        }
        this.zone.run(function () {
            _this.list = bufferList;
        });
    };
    return MainBench3Ctrl;
}());
MainBench3Ctrl = __decorate([
    core_1.Component({
        selector: 'main-bench-3',
        moduleId: module.id,
        templateUrl: '../views/main/benchmark/3.html'
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], MainBench3Ctrl);
exports.MainBench3Ctrl = MainBench3Ctrl;
;
//# sourceMappingURL=main.js.map