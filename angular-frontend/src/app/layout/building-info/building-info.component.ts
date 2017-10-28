import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {CommonService} from '../../commonService/common.service';

@Component({
  selector: 'app-building-info',
  templateUrl: './building-info.component.html',
  styleUrls: ['./building-info.component.scss']
})
export class BuildingInfoComponent implements OnInit{
  building = null;
  apartments = null;
  constructor(private service: CommonService) {

  }

  ngOnInit() {
      console.log(localStorage.getItem('building_id'));
      const data = { 'building_id': localStorage.getItem('building_id'),
          'jwt' : JSON.parse(localStorage.getItem('user')).jwt };
      this.service.post('getBuildingInfo', data).then( resp => {
              console.log(resp);
              if (resp.building != null) {
                  this.building = JSON.parse(resp.building);
                  this.apartments = JSON.parse(resp.apartments);
                  // this.avaliable = true;
              } else {
                  alert ( resp.message );
              }
          }
      );
  }

  

}
