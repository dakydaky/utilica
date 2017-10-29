import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from '../../../../../../commonService/common.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    array = ['08:00-11:00', '11:00-14:00', '14:00-17:00', '17:00-20:00', '20:00-23:00', '23:00-2:00'];
    closeResult: string;

    constructor(private modalService: NgbModal, private service: CommonService, private router: Router) {
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
        const send = {'building': data, 'jwt': JSON.parse(localStorage.getItem('user')).jwt}
        this.service.post('createBuilding', send).then(resp => {
            alert(resp.message);
            this.router.navigate(['/building']);
        });
    }
}
