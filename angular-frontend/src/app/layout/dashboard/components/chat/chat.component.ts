import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../../commonService/common.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
    buildingId;
    constructor( private service: CommonService) { }

    ngOnInit() {
        debugger;
        this.buildingId = JSON.parse(localStorage.getItem('building_id'));
        const data = { 'jwt': JSON.parse(localStorage.getItem('user')).jwt,
            'building_id': this.buildingId };
        this.service.post('/getBroadcast', data).then( resp => {
            debugger;
            console.log(resp);
        })
    }
}
