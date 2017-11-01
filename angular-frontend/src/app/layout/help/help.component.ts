import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-Help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.scss'],
    animations: [routerTransition()]    
})
export class HelpComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
