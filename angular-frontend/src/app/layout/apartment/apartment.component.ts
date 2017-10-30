import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from '../../commonService/common.service';
import { routerTransition } from '../../router.animations';
import {Router} from "@angular/router";



@Component({
    selector: 'app-apartment',
    templateUrl: './apartment.component.html',
    styleUrls: ['./apartment.component.scss'],
    animations: [routerTransition()]
})

export class ApartmentComponent implements OnInit {
    apartment: JSON;
    constructor(private service: CommonService, private router: Router) {}

    ngOnInit() {
        // debugger;
        const data = { 'jwt' : JSON.parse(localStorage.getItem('user')).jwt  };
        this.service.post('getApartment', data)
            .then( resp => {
               // debugger;
                this.apartment = resp.apartment;
                localStorage.setItem('apartments', JSON.stringify(this.apartment));
            });
    }

    goToMaintance(aid) {
        localStorage.setItem('app_id', aid);
        this.router.navigateByUrl('/maintenance');
    }
}
