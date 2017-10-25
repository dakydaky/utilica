import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbCarouselModule,
  NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';



import { BuildingInfoRoutingModule } from './building-info-routing.module';
import { BuildingInfoComponent } from './building-info.component';
import {
  NotificationComponent,
} from './components';
import { StatModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    BuildingInfoRoutingModule,
    StatModule,
  ],
  declarations: [
    BuildingInfoComponent,
    NotificationComponent
  ]
})
export class BuildingInfoModule { }
