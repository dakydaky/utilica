import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from '../../../../commonService/common.service';
@Component({
    selector: 'app-modal-edit',
    templateUrl: './modal-edit.component.html',
    styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {
    closeResult: string;
    @Input() b;
    @Output() change: EventEmitter<any> = new EventEmitter();
    reqIsSent = false;
    constructor(private modalService: NgbModal, private service: CommonService) {
    }

    ngOnInit() {
        // debugger;
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
            return  `with: ${reason}`;
        }
    }

    registar(data, c) {
        console.log(data);
        const d = { 'building': data, 'building_id': JSON.stringify(this.b.id),
            'jwt': JSON.parse(localStorage.getItem('user')).jwt };
        console.log(d);
        this.reqIsSent = true;
        this.service.post('updateBuilding', d).then( resp => {
            this.reqIsSent = false;
            if ( resp.message === 'OK') {
                alert('You have successfully updated building.');
                this.change.emit(
                    'refresh');
                c('Close click');
            } else {
                alert ( 'There was some error. You input some wrong data.');
            }
        });
    }
}
