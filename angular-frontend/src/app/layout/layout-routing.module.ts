import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'building', loadChildren: './building/building.module#BuildingModule' },
            { path: 'building-info', loadChildren: './building-info/building-info.module#BuildingInfoModule' },
            { path: 'broadcast', loadChildren: './broadcast/broadcast.module#BroadcastModule' },
            { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
            { path: 'help', loadChildren: './help/help.module#HelpModule' },
            { path: 'laundry', loadChildren: './laundry/laundry.module#LaundryModule' },
            { path: 'apartment', loadChildren: './apartment/apartment.module#ApartmentModule' },
            { path: 'maintenance', loadChildren: './maintenance/maintenance.module#MaintenanceModule' },
            { path: 'inquiries', loadChildren: './inquiries/inquiries.module#InquiriesModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
