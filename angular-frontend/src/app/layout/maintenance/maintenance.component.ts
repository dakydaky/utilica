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
    build;

    constructor(private service: CommonService, private router: Router) {
    }

    ngOnInit() {
        const data = JSON.parse(localStorage.getItem('user'));
        this.userType = data.type;
        if ( this.userType === 'tenet') {
            this.apart = JSON.parse(localStorage.getItem('app_id'));
        } else {
            this.build = JSON.parse(localStorage.getItem('building_id'));
        }
        this.refresh();
    }

    refresh() {
        const d = {
            'jwt': JSON.parse(localStorage.getItem('user')).jwt,
            'ap_id': this.apart,
            'b_id' : this.build
        };
        this.service.post('getListOfMaintenance', d).then(resp => {
            this.mainList = resp.main;
            if (this.mainList.length === 0) {
                this.zeroMain = 'true';
            } else {
                this.zeroMain = 'false';
            }
        });

    }

    changeProgres(s, id) {
        const data = { 'progress': s, 'm_id': id,
            'jwt' : JSON.parse(localStorage.getItem('user')).jwt };
        this.service.post('updateMaintenance', data).then( resp => {
            if (resp.message === 'OK') {
                alert('You have successfully update stage of maintenance.');
                this.refresh();
            } else {
                alert('Error.');
            }
        });
    }
}
