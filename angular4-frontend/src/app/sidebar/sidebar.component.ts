import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  static isActive: boolean;
  @Input() role;
  content = [ ];

  constructor() {
    SidebarComponent.isActive = false;
  }

  ngOnInit() {
    if ( this.role === 'guest') {
      this.content.push('Login');
      this.content.push('Singup');
    } else if (this.role === 'landlord') {
      this.content.push('landlord');
    }else {
      this.content.push('tenant');
    }
  }

  getisActivate() { // It won't active a side bar by pressing the button in header component
    return SidebarComponent.isActive.valueOf();
  }

}
