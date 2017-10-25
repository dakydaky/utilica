import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

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
    constructor() {}

    ngOnInit() {
    }
}
