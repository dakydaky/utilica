import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InquiriesRoutingModule } from './inquiries-routing.module';
import { InquiriesComponent } from './inquiries.component';

@NgModule({
  imports: [
    CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        InquiriesRoutingModule
  ],
  declarations: [
    InquiriesComponent,
    ]
})
export class InquiriesModule { }
