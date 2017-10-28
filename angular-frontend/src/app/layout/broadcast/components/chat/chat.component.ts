import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../../../commonService/common.service";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
    userType: string;
    broadcast = null;
    constructor(private service: CommonService) {
     }
    ngOnInit() {
        debugger;
        const data = JSON.parse(localStorage.getItem('user'));
        this.userType = data.type;
        console.log(this.userType);
        this.getBroadcast();
    }
    getBroadcast() {
        const data = { 'jwt' : JSON.parse(localStorage.getItem('user')).jwt,
        'building_id' :  JSON.parse(localStorage.getItem('building_id'))}
        this.service.post('getBroadCast', data).then( resp => {
            debugger;
            this.broadcast = resp.broadcast;
            }
        );
    }

    sendBroadcast(vel) {
        debugger;
    console.log(vel);
    const data = { 'jwt': JSON.parse(localStorage.getItem('user')).jwt,
    'building_id': JSON.parse(localStorage.getItem('building_id')), 'text' : vel.text };
    this.service.post('postBroadCast', data).then(resp => {
        alert(resp.message);
    })
    }
}
