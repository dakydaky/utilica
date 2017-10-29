import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from '../../commonService/common.service';
import {routerTransition} from '../../router.animations';
import {Router} from '@angular/router';


@Component({
    selector: 'app-maintenance',
    templateUrl: './maintenance.component.html',
    styleUrls: ['./maintenance.component.scss'],
    animations: [routerTransition()]
})

export class MaintenanceComponent implements OnInit {
    userType: string;
    constructor(private service: CommonService, private router: Router) {
    }
    
    ngOnInit(){
        const data = JSON.parse(localStorage.getItem('user'));
        this.userType = data.type;
    }
}
