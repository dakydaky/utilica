import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {InquiriesComponent} from './inquiries.component';
import {InquiriesRoutingModule} from './inquiries-routing.module';
import {MailList} from './mail-list/mail-list.component';
import {MailForm} from './mail-form/mail-form.component';
import {MailDetail} from './mail-detail/mail-detail.component';

import {SearchPipe} from './mail-list/pipes/search-pipe';
import {FoldersPipe} from './mail-list/pipes/folders-pipe';

export const routes = [
    {path: '', component: InquiriesComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [
        InquiriesRoutingModule,
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes)],
    declarations: [
        InquiriesComponent,
        MailList,
        MailForm,
        MailDetail,
        FoldersPipe,
        SearchPipe
    ]
})
export class InquiriesModule {
    static routes = routes;
}
