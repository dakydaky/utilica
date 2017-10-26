import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BroadcastComponent } from './broadcast.component';

const routes: Routes = [
    { path: '/broadcast', component: BroadcastComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BroadcastRoutingModule { }
