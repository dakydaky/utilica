import {Component, Input, OnInit} from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() role;
  options = [];

  constructor() { }

  ngOnInit() {
    if ( this.role === 'guest') {
      this.options.push('Login');
      this.options.push('Singup');
    } else if (this.role === 'landlord') {
      this.options.push('landlord');
    }else {
      this.options.push('tenant');
    }
  }


  toggleSidebar() {
    SidebarComponent.isActive = !SidebarComponent.isActive;
  }
}
