import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {CommonService} from '../commonService/common.service';
import { Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    constructor(private service: CommonService, private router: Router) { }

    ngOnInit() { }

    registar(data) {

        if ( data.password === data.repassword ){
            if ( data.firstName === '' || data.lastName === '' || data.email === '' ||
                data.password === '' || data.username === '' ||
                data.type === '' || data.personalNumber === '') {
                alert('Some of inputted data is empty.');
                return;
            }

            this.service.post('register', data).then( resp => {

                if (resp.message === 'OK') {
                    this.router.navigateByUrl('/login');
                    return;
                }

                alert('You did not input all data right');

            });
        }else {
            alert('Password and repassword are not same.');
        }

    }
}
