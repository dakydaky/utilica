import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from "../../commonService/common.service";
import { routerTransition } from '../../router.animations';



@Component({
    selector: 'app-apartment',
    templateUrl: './apartment.component.html',
    styleUrls: ['./apartment.component.scss'],
	animations: [routerTransition()]
})

export class ApartmentComponent implements OnInit {
    apartments: JSON;
    constructor(private service: CommonService) {}

    ngOnInit() {
        const data = { 'jwt' : localStorage.getItem('user')  };
        this.service.post('getListOfBuilding', data)
            .then( resp => {
                
                this.apartments = resp;
                localStorage.setItem('buildings', JSON.stringify(this.apartments));
            }); // error in console : Uncaught TypeError: Cannot read property 'buildings' of undefined
                // at eval (eval at <anonymous>

    }
}
