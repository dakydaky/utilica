import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApartmentRoutingModule } from './apartment-routing.module';
import { ApartmentComponent } from './apartment.component';
import { ModalComponent } from './components';
import { ModalEditComponent } from './components';
import { ModalDeleteComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
    ApartmentRoutingModule
  ],
  declarations: [
    ApartmentComponent,
    ModalComponent,
	ModalEditComponent,
	ModalDeleteComponent
  ]
})
export class ApartmentModule { }
