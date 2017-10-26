import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from "../../commonService/common.service";

export class NgbdModalContent {

  constructor(private modalService: NgbModal) {}
  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
}

@Component({
    selector: 'app-building',
    templateUrl: './building.component.html',
    styleUrls: ['./building.component.scss']
})

export class BuildingComponent implements OnInit {
    buildings: JSON;
    constructor(private service: CommonService) {}

    ngOnInit() {
        const data = { 'jwt' : JSON.parse(localStorage.getItem('user')).jwt  };
        this.service.post('getListOfBuilding', data)
            .then( resp => {
                this.buildings = resp;
                localStorage.setItem('buildings', JSON.stringify(this.buildings));
            }); // error in console : Uncaught TypeError: Cannot read property 'buildings' of undefined
                // at eval (eval at <anonymous>

    }
}
