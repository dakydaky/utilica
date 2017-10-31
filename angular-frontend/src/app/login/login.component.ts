import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {CommonService} from '../commonService/common.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    public sliders: Array<any> = [];

    constructor(public router: Router, private service: CommonService) {
        this.sliders.push({
            imagePath: 'assets/images/condo1.jpg',
            label: '',
            text: ''
        }, {
            imagePath: 'assets/images/key1.jpg',
            label: '',
            text: '',
            color: ''
        }, {
            imagePath: 'assets/images/laundry4.jpg',
            label: '',
            text: ''
        });
    }

    ngOnInit() {
    }

    onLoggedin(data) {
        console.log(data);
        //debugger;
        this.service.post('login', data).then(resp => {
           debugger;
            if (resp.email != null) {
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('user', JSON.stringify(resp));
                this.router.navigateByUrl('');
            } else {
                alert(resp.message);
            }
        })
    }

}
