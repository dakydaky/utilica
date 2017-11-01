import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbCarouselModule,
  NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule} from '@angular/platform-browser';
import { BuildingInfoRoutingModule } from './building-info-routing.module';
import { BuildingInfoComponent } from './building-info.component';
import {
  NotificationComponent,
  InlineEditComponent
} from './components';
import { StatModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    BuildingInfoRoutingModule,
    StatModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    BuildingInfoComponent,
    NotificationComponent,
    InlineEditComponent,
  ],
  providers: [
    FormsModule,
    HttpModule,
    BrowserModule 
   ]
})
export class BuildingInfoModule { }
