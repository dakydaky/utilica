import {Component} from '@angular/core';
import {Output, Input} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {CommonService} from '../../../commonService/common.service';
import {MessageServiceService} from '../messageBroker/message-service.service';

@Component({
    selector: '[mail-form]',
    templateUrl: './mail-form.template.html',
})

export class MailForm {
    @Output() backToMailList = new EventEmitter();
    @Input() message: any;

    sender: string = '';
    subject: string = '';
    body: string = '';
    reciverBool = false;

    constructor(private service: CommonService, private messageService: MessageServiceService) {
    }

    // for sending messagers

    sendMessage(): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage('refresh');
    }

    clearMessage(): void {
        // clear message
        this.messageService.clearMessage();
    }

    onToBack(): void {
        console.log('qwerty');
        this.backToMailList.emit('');
    }

    ngOnInit(): void {
        if (this.message) {
            this.sender = this.message.sender;
            this.subject = 'Re: ' + this.message.subject;

            let span = document.createElement('span');
            span.innerHTML = this.message.body;
            this.body = span.innerText;
            this.reciverBool = true;
        }
    }

    sendInquiries(val) {
        debugger;
        let data;

        if (this.message) {
            data = {
                'subject': val.subject, 'body': val.body,
                'jwt': JSON.parse(localStorage.getItem('user')).jwt,
                'apartment_id': JSON.parse(localStorage.getItem('app_id')),
                'message_id' : this.message.id,

            };
        } else {
             data = {
                'subject': val.subject, 'body': val.body,
                'jwt': JSON.parse(localStorage.getItem('user')).jwt,
                'apartment_id': JSON.parse(localStorage.getItem('app_id'))
            };
        }

        if (this.message) {
            // replay
            this.service.post('replayInquiries', data).then(resp => {
                //debugger;
                if (resp.message === 'OK') {
                    alert('You have successfully send inquiry.');
                    this.backToMailList.emit('refresh');
                    this.sendMessage();
                } else {
                    alert('Error.')
                }
            });
        } else {
            this.service.post('createInquiries', data).then(resp => {
               // debugger;
                if (resp.message === 'OK') {
                    alert('You have successfully send inquiry.');
                    this.backToMailList.emit('refresh');
                } else {
                    alert('Error.');
                    this.sendMessage();
                }
            });
        }

       // debugger;
    }
}

