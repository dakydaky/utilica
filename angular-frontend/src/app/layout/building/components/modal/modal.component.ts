import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from '../../../../commonService/common.service';


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    closeResult: string;
    @Output() change: EventEmitter<any> = new EventEmitter();
    // @ViewChild('content') public modal: ModalDirective;


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

    registar(data) {
        // debugger;
        alert('clock')
        // this.content.hide();
        alert('desilo se')
        return;
        // const send = {'building': data, 'jwt': JSON.parse(localStorage.getItem('user')).jwt}
        // this.service.post('createBuilding', send).then(resp => {
        //     alert(resp.message);
        //     this.change.emit(
        //         'refresh'
        //     );
        // });
    }
}
