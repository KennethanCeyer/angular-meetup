import { Component, NgZone } from '@angular/core';

@Component({
    selector: 'main',
    moduleId: module.id,
    templateUrl: '../views/main/index.html'
})
export class MainCtrl {
};

@Component({
    selector: 'main-bench-1',
    moduleId: module.id,
    templateUrl: '../views/main/benchmark/1.html'
})
export class MainBench1Ctrl {
    private zone :NgZone;
    public list :Array<any> = [];
    public timeSpend :number = -1;

    constructor(zone:NgZone) {
        this.zone = zone;
    }

    benchmark() {
        let bufferList :Array<any> = [];
        let currentTime = new Date().getMilliseconds();
        this.list = [];

        for(var i=0; i<10000; i++) {
            bufferList.push({
                idx: i,
                text: 'ITEM ' + i
            });
        }

        this.zone.run(() => {
            this.list = bufferList;
        });

        this.timeSpend = new Date().getMilliseconds() - currentTime;
        console.log(this.timeSpend);
    }
};

@Component({
    selector: 'main-bench-2',
    moduleId: module.id,
    templateUrl: '../views/main/benchmark/2.html'
})
export class MainBench2Ctrl {
    private zone :NgZone;
    public list :Array<any> = [];
    public timeSpend :number = -1;

    constructor(zone:NgZone) {
        this.zone = zone;

        let bufferList :Array<any> = [];
        let currentTime = new Date().getMilliseconds();
        this.list = [];

        for(let i=0; i<10000; i++) {
            bufferList.push({
                idx: i,
                text: 'ITEM ' + i
            });
        }

        this.zone.run(() => {
            this.list = bufferList;
        });
    }

    benchmark() {
        for(let i=0; i<5000; i++) {
            let index :number = parseInt(Math.random() * this.list.length);
            this.list.splice(index, 1);
        }
    }
};

@Component({
    selector: 'main-bench-3',
    moduleId: module.id,
    templateUrl: '../views/main/benchmark/3.html'
})
export class MainBench3Ctrl {
    private zone :NgZone;
    public list :Array<any> = [];
    public timeSpend :number = -1;

    constructor(zone:NgZone) {
        this.zone = zone;
    }

    benchmark() {
        let bufferList :Array<Array<any>> = [];
        let currentTime = new Date().getMilliseconds();
        this.list = [];

        for(let i=0; i<1000; i++) {
            let subList :Array<any> = [];
            for(let j=0; j<20; j++) {
                subList.push({
                    idx: j,
                    text: 'ITEM ' + i + ', ' + j
                });
            }
            bufferList.push(subList);
        }

        this.zone.run(() => {
            this.list = bufferList;
        });
    }
};
