import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-Blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    animations: [routerTransition()]
    
})
export class BlogComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
