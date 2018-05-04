import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
    currentCount = 0;
    constructor() { }
    ngOnInit() {
    }

    incrementCounter() {
        this.currentCount++;
    }
}
