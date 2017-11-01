import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'building', loadChildren: './building/building.module#BuildingModule' },
            { path: 'building-info', loadChildren: './building-info/building-info.module#BuildingInfoModule' },
            { path: 'broadcast', loadChildren: './broadcast/broadcast.module#BroadcastModule' },
            { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
            { path: 'help', loadChildren: './help/help.module#HelpModule' },
            { path: 'laundry', loadChildren: './laundry/laundry.module#LaundryModule' },
            { path: 'apartment', loadChildren: './apartment/apartment.module#ApartmentModule' },
            { path: 'maintenance', loadChildren: './maintenance/maintenance.module#MaintenanceModule' },
            { path: 'inquiries', loadChildren: './inquiries/inquiries.module#InquiriesModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' }
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
