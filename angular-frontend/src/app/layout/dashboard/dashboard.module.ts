import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { CalendarModule } from 'angular-calendar';
import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        CalendarModule.forRoot(),
        AngularWeatherWidgetModule.forRoot({
          key: 'f111f353b91a5595b85a1d596de150de',
          name: WeatherApiName.OPEN_WEATHER_MAP,
          baseUrl: 'http://api.openweathermap.org/data/2.5'
        }),
        LeafletModule.forRoot()
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ]
})
export class DashboardModule { }
