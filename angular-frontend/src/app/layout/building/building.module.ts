import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BuildingRoutingModule } from './building-routing.module';
import { BuildingComponent } from './building.component';
import { ModalComponent } from './components';
@NgModule({
  imports: [
    CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
    BuildingRoutingModule
  ],
  declarations: [
    BuildingComponent,
    ModalComponent
  ]
})
export class BuildingModule { }
