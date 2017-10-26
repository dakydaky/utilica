import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
    userType: string;
    constructor() {
     }
    ngOnInit() { 
        const data = (JSON.parse(localStorage.getItem('user')));
        this.userType = data.type;
        console.log(this.userType);
    }
}
