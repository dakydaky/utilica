import {Component, EventEmitter, Input, Output} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from '../../../../commonService/common.service';

@Component({
    selector: 'app-modal-delete',
    templateUrl: './modal-delete.component.html',
    styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent {
    closeResult: string;
    @Input() buildingName;
    @Input() buildingId;
    @Output() change: EventEmitter<any> = new EventEmitter();
    constructor(private modalService: NgbModal, private service: CommonService) { }

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
            return  `with: ${reason}`;
        }
    }

    registar(value, c) {
        const data = { 'building_id' : this.buildingId,
        'jwt' : JSON.parse(localStorage.getItem('user')).jwt };
        console.log(data);
        this.service.post('deleteBuilding', data).then( resp => {
            alert(resp.message);
            this.change.emit('refresh');
            c('Close click');
            }
        );

    }
}
