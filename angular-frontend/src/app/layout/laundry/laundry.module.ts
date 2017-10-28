import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LaundryRoutingModule } from './laundry-routing.module';
import { LaundryComponent } from './laundry.component';
import { DateComponent } from './components';
import { ModalComponent } from './components/date/components';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
    LaundryRoutingModule
  ],
  declarations: [
    LaundryComponent,
    DateComponent,
    ModalComponent
  ],
  providers: [
    DatePipe
  ]
})
export class LaundryModule { }
