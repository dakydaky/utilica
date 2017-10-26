import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    constructor(public router: Router) { }
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() count: number;
    @Input() label: string;
    @Input() data: number;
    @Input() routerLink: string;
    @Output() event: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
    }

    redirect() {
        if(this.routerLink === '/broadcast'){
            this.router.navigate(['/broadcast']);
        }
    }
}
