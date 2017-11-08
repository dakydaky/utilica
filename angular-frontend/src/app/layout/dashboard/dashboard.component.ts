import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../commonService/common.service';
import { routerTransition } from '../../router.animations';
import { WeatherSettings, TemperatureScale, ForecastMode, WeatherLayout } from 'angular-weather-widget';
//import * as L from 'mapbox.js';
import * as L from 'leaflet';
const iconUrl = require('./images/marker-icon.png');
const shadowUrl = require('./images/marker-shadow.png');
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    buildingsAddress: JSON;
    view: string = 'month';
    viewDate: Date = new Date();
    settings: WeatherSettings = {
        location: {
          cityName: 'Vasteras'
        },
        backgroundColor: '#347c57',
        color: '#ffffff',
        width: 'auto',
        height: '100%',
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
            L.marker([59.61602, 16.54121]).on('click', markerOnClick),//Junior Apartment
            L.marker([59.61748, 16.55022]),//.popup('Norra Apartment.'),//Norra Apartment
            L.marker([59.61994, 16.55643]),//.popup('Regulatorn Apartment.'),//Regulatorn Apartment
            L.marker([59.62521, 16.55768]),//.popup('Gokarten Apartment.'),//Gokarten Apartment
            L.marker([59.62566, 16.57352]),//.popup('Hagastaden apartment.'),//Hagastaden apartment
            L.marker([59.61952, 16.55020]),//.popup('Hülphersgatan room.'),//Hülphersgatan room
            L.marker([59.60757, 16.53121]),//.popup('Kata apartment.'),//Kata apartment
            L.marker([59.62667, 16.58286]),//.popup('Park apartment.'),//Park apartment
            L.marker([59.62217, 16.50152]),//.popup('Vallby shared apartment.'),//Vallby shared apartment
            L.marker([59.61847, 16.54567]) //.popup('Kristiansborg room.'),//Kristiansborg room      
        ],
        zoom: 14,
        center: L.latLng(59.61617, 16.55276)
    };
    
    constructor(private service: CommonService) {
         
    }

    ngOnInit() {
        let DefaultIcon = L.icon({
            iconUrl: iconUrl,
            shadowUrl: shadowUrl
        });
        
        L.Marker.prototype.options.icon = DefaultIcon;
        this.getBuildingAddress();
    }

    getBuildingAddress() {
        const data = {'jwt': JSON.parse(localStorage.getItem('user')).jwt};
        this.service.post('getBuildingAddress', data)
            .then(resp => {
               // debugger;
                this.buildingsAddress = resp;
                console.log(resp);
                localStorage.setItem('buildingsAddress', JSON.stringify(this.buildingsAddress));
            }); // error in console : Uncaught TypeError: Cannot read property 'buildings' of undefined
                // at eval (eval at <anonymous>

    }

}

function markerOnClick(e)
{
    alert("hi. you clicked the marker at " + e.latlng);
}
