import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../commonService/common.service";
import { routerTransition } from '../../router.animations';



@Component({
    selector: 'app-inquiries',
    templateUrl: './inquiries.component.html',
    styleUrls: ['./inquiries.component.scss'],
	animations: [routerTransition()]
})

export class InquiriesComponent implements OnInit {
    constructor(private service: CommonService) {}

    ngOnInit() {
    
    }
}
