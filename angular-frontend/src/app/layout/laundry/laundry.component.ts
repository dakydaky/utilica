import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from "../../commonService/common.service";
import { routerTransition } from '../../router.animations';
import { DatePipe } from '@angular/common';



@Component({
    selector: 'app-laundry',
    templateUrl: './laundry.component.html',
    styleUrls: ['./laundry.component.scss'],
    animations: [routerTransition()],
    providers: [DatePipe]
})


export class LaundryComponent implements OnInit {

    ngOnInit() {      
    }
}
