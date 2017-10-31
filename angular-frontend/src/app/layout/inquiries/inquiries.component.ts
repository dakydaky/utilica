import {Component, ElementRef, OnInit} from '@angular/core';
import {MessageServiceService} from './messageBroker/message-service.service';

import { Subscription } from 'rxjs/Subscription';

declare var jQuery: any;

@Component({
    selector: 'inquiries',
    templateUrl: './inquiries.template.html',
    styleUrls: ['./inquiries.style.scss']
})

export class InquiriesComponent implements OnInit {
    mailListShow = true;
    mailFormShow = false;
    mailDetailShow = false;
    currentMail: any;
    currentFolderName = 'Inbox';
    $el: any;
    repliedMessage: any;

    message: any;
    subscription: Subscription;

    constructor(el: ElementRef, private messageService: MessageServiceService) {
        this.$el = jQuery(el.nativeElement);

        this.initMailboxAppDemo(this.$el);

        this.subscription = this.messageService.getMessage().subscribe( message => {
            debugger;

        })
    }

    handleComposeBtn(event): void {
        this.repliedMessage = event || undefined;
        this.changeEmailComponents('mailForm');
    }

    onReplyMail(mail: any): void {
        debugger;
        this.currentMail = mail;
        this.changeEmailComponents('mailDetail');
    }

    changeEmailComponents(componentName: string): void {
        debugger;
        const mailState = {
            'mailList': (that): void => {
                that.mailFormShow = that.mailDetailShow = false;
                that.mailListShow = true;
            },

            'mailForm': (that): void => {
                that.mailListShow = that.mailDetailShow = false;
                that.mailFormShow = true;
            },

            'mailDetail': (that): void => {
                that.mailListShow = that.mailFormShow = false;
                that.mailDetailShow = true;
            },
        };

        mailState[componentName](this);
    }

    setFolderName(folderName: string): void {
        this.currentFolderName = folderName;
        if (!this.mailListShow) {
            this.changeEmailComponents('mailList');
        }
    }

    /* tslint:disable */
    initMailboxAppDemo($el: any): void {
        let showAlert = function (): void {
            $el.find('#app-alert')
                .removeClass('hide')
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (): void {
                    jQuery(this).removeClass('animated bounceInLeft');
                });
        };

        setTimeout(() => showAlert(), 3000);
    }

    /* tslint:enable */
    changeActiveItem(): void {
        this.$el.find('.nav a').on('click', function (): void {
            jQuery('.nav').find('.active').removeClass('active');
            jQuery(this).parent().addClass('active');
        });
    }

    ngOnInit(): void {
        this.changeActiveItem();
    }
}
