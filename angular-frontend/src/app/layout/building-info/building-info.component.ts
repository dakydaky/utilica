import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../commonService/common.service';

@Component({
  selector: 'app-building-info',
  templateUrl: './building-info.component.html',
  styleUrls: ['./building-info.component.scss']
})
export class BuildingInfoComponent implements OnInit {
  data;
  constructor(private service: CommonService) {
  }

  ngOnInit() {
    //const data = (JSON.parse(localStorage.getItem('user')));
    //const userType = data.type;
  }

  

}
