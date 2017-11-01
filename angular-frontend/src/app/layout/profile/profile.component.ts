import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from "../../commonService/common.service";
import { routerTransition } from '../../router.animations';
import {Router} from "@angular/router";



@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
	animations: [routerTransition()]
})

export class ProfileComponent implements OnInit {
    
    constructor(private service: CommonService, private router: Router) {}

    ngOnInit() {
        

    }

  
}
