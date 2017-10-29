import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from '../../../../commonService/common.service';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
    selector: 'app-modal-maintenance',
    templateUrl: './modal-maintenance.component.html',
    styleUrls: ['./modal-maintenance.component.scss']
})
export class ModalMaintenanceComponent {
    closeResult: string;
    @Output() change: EventEmitter<any> = new EventEmitter();
    @ViewChild('content') public modal: ModalDirective;
    @ViewChild('closeBtn') closeBtn: ElementRef;
    requestSent = false;

    constructor(private modalService: NgbModal, private service: CommonService) {
    }


    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
