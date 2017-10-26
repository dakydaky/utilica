import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbCarouselModule,
  NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import { BroadcastRoutingModule } from './broadcast-routing.module';
import { BroadcastComponent } from './broadcast.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
  ],
  declarations: [
  ]
})
export class BroadcastModule { }
