import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    NgbDropdownModule.forRoot(),
    CommonModule,
    SignupRoutingModule,
      FormsModule
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
