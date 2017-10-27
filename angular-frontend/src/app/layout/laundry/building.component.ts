import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from "../../commonService/common.service";
import { routerTransition } from '../../router.animations';



@Component({
    selector: 'app-building',
    templateUrl: './building.component.html',
    styleUrls: ['./building.component.scss'],
	animations: [routerTransition()]
})

export class BuildingComponent implements OnInit {
    buildings: JSON;
    constructor(private service: CommonService) {}

    ngOnInit() {
        const data = { 'jwt' : localStorage.getItem('user')  };
        this.service.post('getListOfBuilding', data)
            .then( resp => {
                
                this.buildings = resp;
                localStorage.setItem('buildings', JSON.stringify(this.buildings));
            }); // error in console : Uncaught TypeError: Cannot read property 'buildings' of undefined
                // at eval (eval at <anonymous>

    }
}
