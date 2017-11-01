import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommonService} from "../../commonService/common.service";
import {routerTransition} from '../../router.animations';


@Component({
    selector: 'app-broadcast',
    templateUrl: './broadcast.component.html',
    styleUrls: ['./broadcast.component.scss'],
    animations: [routerTransition()]    
})


export class BroadcastComponent implements OnInit {
    constructor() { }
    ngOnInit() {
        debugger;
    }
}
