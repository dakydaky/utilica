import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit{
    userType: string;
    navigationController: string;
	test = 1;
    isActive = false;
    showMenu = '';
    user;
    route: string;
    
    constructor(location: Location, router: Router) {
        router.events.subscribe((val) => {
          if(location.path() != ''){
            this.route = location.path();
          } else {
            this.route = 'Home'
          }
        });
      }
    
    ngOnInit(){
        console.log(this.route);
        const data = JSON.parse(localStorage.getItem('user'));
        this.userType = data.type;
        this.user = JSON.parse(localStorage.getItem('user'));    
        
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
	
	changeTest(view) {
		this.test=view;
	}
}
