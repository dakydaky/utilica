import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import {
    NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        LoginRoutingModule,
        FormsModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
