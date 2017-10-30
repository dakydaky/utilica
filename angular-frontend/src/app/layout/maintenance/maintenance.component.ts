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
    mainList;
    zeroMain = 'loading';
    apart;

    constructor(private service: CommonService, private router: Router) {
    }

    ngOnInit() {
        // debugger;
        const data = JSON.parse(localStorage.getItem('user'));
        this.userType = data.type;
        this.apart = JSON.parse(localStorage.getItem('app_id'));
        this.refresh();
    }

    refresh() {
        debugger;
        const d = {
            'jwt': JSON.parse(localStorage.getItem('user')).jwt,
            'ap_id': this.apart
        };
        this.service.post('getListOfMaintenance', d).then(resp => {
            debugger;
            this.mainList = resp.main;
            if (this.mainList.length === 0) {
                this.zeroMain = 'true';
            } else {
                this.zeroMain = 'false';
            }
        });

    }
}
