import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CommonService} from '../../../../commonService/common.service';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.scss'],
    providers: [DatePipe]
})

export class DateComponent implements OnInit {
    counter: Date;
    @Input() day;
    appoitments = [];
    startRendering = false;
    @Output() event: EventEmitter<any> = new EventEmitter();

    constructor(private datePipe: DatePipe, private service: CommonService) {
    }

    ngOnInit() {
        this.counter = new Date();
        this.counter.setDate(this.counter.getDate() + this.day);
        this.getAppoimnets();
    }

    getAppoimnets() {
        debugger;
        let d = this.counter.getMonth() + 1 % 13;
        if (d === 0) {
            d = 1;
        }
        const data = {
            'jwt': JSON.parse(localStorage.getItem('user')).jwt,
            'day': this.counter.getDate(),
            'month': d,
            'year': this.counter.getFullYear(),
            'building_id' : localStorage.getItem('building_id')
        };

        this.service.post('getScheduleLaundry', data).then(resp => {
            this.appoitments = resp.laundry;
            this.startRendering = true;
        });
    }

    refreshFutherAndGetAppartements() {
        this.event.emit('refresh');
    }
}
