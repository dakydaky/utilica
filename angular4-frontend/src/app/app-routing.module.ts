import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {LandlordComponent} from './landlord/landlord.component';
import {TenantComponent} from './tenant/tenant.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'landlord', component: LandlordComponent},
  { path: 'tenant', component: TenantComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
