import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from '../../commonService/common.service';
import {routerTransition} from '../../router.animations';
import {Router} from '@angular/router';


@Component({
    selector: 'app-building',
    templateUrl: './building.component.html',
    styleUrls: ['./building.component.scss'],
    animations: [routerTransition()]
})

export class BuildingComponent implements OnInit {
    buildings: JSON;

    constructor(private service: CommonService, private router: Router) {
    }

    ngOnInit() {
        this.getBuildings();
    }

    getBuildings() {
        const data = {'jwt': JSON.parse(localStorage.getItem('user')).jwt};
        this.service.post('getListOfBuilding', data)
            .then(resp => {
                this.buildings = resp;
                localStorage.setItem('buildings', JSON.stringify(this.buildings));
            }); // error in console : Uncaught TypeError: Cannot read property 'buildings' of undefined
                // at eval (eval at <anonymous>

    }

    goToBuldingInfo(value) {
        localStorage.setItem('building_id', value);
        this.router.navigate(['/building-info'])
    }
}
