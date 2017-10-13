import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number = [
    {
     num: 1,
      address: 'Norra Alegatan'
    },
    {
      num: 2,
      address: 'Norra Alegatan'
    },
    {
      num: 3,
      address: 'Norra Alegatan'
    },
    {
      num: 4,
      address: 'Norra Alegatan'
    }];
}
