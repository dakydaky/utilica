import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from '../../../../../../commonService/common.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    array = ['9:00-12:00', '12:00-15:00', '15:00-18:00', '18:00-21:00', '21:00-00:00'];
    closeResult: string;
    @Input() appoitmentsArray;
    @Input() date;
    @Output('change') event: EventEmitter<any> = new EventEmitter();

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

    registar(data, c) {

        let d = this.date.getMonth() + 1 % 13;
        if (d === 0) {
            d = 1;
        }

        const send = {
            'day': this.date.getDate(),
            'month': d,
            'year': this.date.getFullYear(),
            'time': data,
            'building_id': localStorage.getItem('building_id'),
            'jwt': JSON.parse(localStorage.getItem('user')).jwt
        };
        this.service.post('makeAppointment', send).then(resp => {
            // debugger;
            if (resp.message === 'OK') {
                alert('You have successfully reserved a time interval for laundry.');
                this.event.emit('refresh');
            } else {
                alert(resp.message);
            }
            c('Close click');
        });
    }

    isFree(el) {
        // debugger;
        const a = this.appoitmentsArray.find(x => x.timeInterval === el);
        if (a == null) {
            // console.log('true');
            return true;
        } else {
            // console.log('false');
            return false;
        }
    }

    userLandlord() {
        if ( JSON.parse(localStorage.getItem('user')).type === 'landlord') {
            return true;
        } else {
            return false;
        }
    }
}
