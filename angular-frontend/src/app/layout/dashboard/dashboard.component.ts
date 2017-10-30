import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { WeatherSettings, TemperatureScale, ForecastMode, WeatherLayout } from 'angular-weather-widget';
import * as L from 'mapbox.js';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    view: string = 'month';
    viewDate: Date = new Date();
    settings: WeatherSettings = {
        location: {
          cityName: 'Vasteras'
        },
        backgroundColor: '#347c57',
        color: '#ffffff',
        width: 'auto',
        height: 'auto',
        showWind: false,
        scale: TemperatureScale.CELCIUS,
        forecastMode: ForecastMode.DETAILED,
        showDetails: true,
        showForecast: true,
        layout: WeatherLayout.WIDE,
        language: 'en'
      };
      
      options = {
        layers: [
            L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { minZoom: 14, maxZoom: 16, attribution: '...' }),
            L.marker([59.61602, 16.54121]).setPopupContent('Junior Apartment.'),//Junior Apartment
            /* L.marker([59.61748, 16.55022]).popup('Norra Apartment.'),//Norra Apartment
            L.marker([59.61994, 16.55643]).popup('Regulatorn Apartment.'),//Regulatorn Apartment
            L.marker([59.62521, 16.55768]).popup('Gokarten Apartment.'),//Gokarten Apartment
            L.marker([59.62566, 16.57352]).popup('Hagastaden apartment.'),//Hagastaden apartment
            L.marker([59.61952, 16.55020]).popup('Hülphersgatan room.'),//Hülphersgatan room
            L.marker([59.60757, 16.53121]).popup('Kata apartment.'),//Kata apartment
            L.marker([59.62667, 16.58286]).popup('Park apartment.'),//Park apartment
            L.marker([59.62217, 16.50152]).popup('Vallby shared apartment.'),//Vallby shared apartment
            L.marker([59.61847, 16.54567]).popup('Kristiansborg room.'),//Kristiansborg room    */         
            L.circle([59.61617, 16.55276], { radius: 5000 })
        ],
        zoom: 14,
        center: L.latLng(59.61617, 16.55276)
    };
    
    constructor() {
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });

        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        }, {
            id: 2,
            type: 'warning',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        });
    }

    ngOnInit() {
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
