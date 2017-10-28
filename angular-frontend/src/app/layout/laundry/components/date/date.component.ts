import { Component, OnInit, Input} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from "../../../../commonService/common.service";
import {arraysAreEqual} from "tslint/lib/utils";
import {Router} from "@angular/router";
import {DatePipe } from '@angular/common';

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.scss'],
    providers: [ DatePipe]
})

export class DateComponent implements OnInit {
    days: Date; 
    counter: Date;
    @Input() day;
    constructor(private datePipe: DatePipe) {}

    ngOnInit() {
        this.counter = new Date(); 
        this.counter.setDate(this.counter.getDate() + this.day);
        this.days=this.counter;
       
    }
}
