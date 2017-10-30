import { Component } from '@angular/core';
import { Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

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
    }
  }
}

