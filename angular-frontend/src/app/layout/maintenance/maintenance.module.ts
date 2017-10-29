import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceComponent } from './maintenance.component';
import { ModalComponent } from './components';
import { ModalDeleteComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        MaintenanceRoutingModule
  ],
  declarations: [
    MaintenanceComponent,
    ModalComponent,
	  ModalDeleteComponent
  ]
})
export class MaintenanceModule { }
