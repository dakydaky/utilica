import { Component, OnInit } from '@angular/core';

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
    
    ngOnInit(){
        const data = JSON.parse(localStorage.getItem('user'));
        this.userType = data.type;

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
