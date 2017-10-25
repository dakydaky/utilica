import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingRoutingModule } from './building-routing.module';
import { BuildingComponent } from './building.component';
@NgModule({
  imports: [
    CommonModule,
    BuildingRoutingModule
  ],
  declarations: [BuildingComponent]
})
export class BuildingModule { }
