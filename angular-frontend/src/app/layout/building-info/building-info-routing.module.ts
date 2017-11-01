import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildingInfoComponent } from './building-info.component';

const routes: Routes = [
    { path: '', component: BuildingInfoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BuildingInfoRoutingModule { }
