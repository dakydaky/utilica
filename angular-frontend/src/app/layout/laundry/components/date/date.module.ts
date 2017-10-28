import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateRoutingModule } from './date-routing.module';
import { DateComponent } from './date.component';
import { ModalComponent } from './components';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
    DateRoutingModule,
    ModalComponent
  ],
  declarations: [
    DateComponent,
    ModalComponent
  ],
  providers: [
    DatePipe
  ]
})
export class DateModule { }
