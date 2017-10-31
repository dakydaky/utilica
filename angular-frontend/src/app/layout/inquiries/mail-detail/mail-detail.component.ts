import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {CommonService} from '../../../commonService/common.service';

@Component({
    selector: '[mail-detail]',
    templateUrl: './mail-detail.template.html',
    styleUrls: ['./mail-detail.style.scss']
})
export class MailDetail implements OnInit {
    @Input() mail: any;
    @Output() backToMailList = new EventEmitter();
    @Output() replyMessage = new EventEmitter();
    math = Math;

    constructor(private service: CommonService) {
    }

    ngOnInit() {
        const data = {
            'jwt': JSON.parse(localStorage.getItem('user')).jwt,
            'm_id': this.mail.id
        };

        this.service.post('readen', data).then(resp => {
            if (resp.message === 'error') {
                alert('Error.');
            }
        })

    }

    onToBack(): void {
        this.backToMailList.emit('');
    }

    goToReply(mail): void {
        debugger;
        this.replyMessage.emit(mail);
    }

    Math(): number {
        return Math.random();
    }
}

