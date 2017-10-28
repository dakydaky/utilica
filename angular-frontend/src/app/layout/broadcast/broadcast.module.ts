
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonService} from '../../commonService/common.service';

import { BroadcastRoutingModule } from './broadcast-routing.module';
import { BroadcastComponent } from './broadcast.component';
import { ChatComponent } from './components';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BroadcastRoutingModule,
      FormsModule
  ],
  declarations: [
    BroadcastComponent,
    ChatComponent
  ]
})
export class BroadcastModule { }
