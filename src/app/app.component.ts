import { Component } from '@angular/core';
import { faCoffee, faHeart, faHeartBroken, faRupeeSign  } from '@fortawesome/free-solid-svg-icons';
// import {     } from '@fortawesome/fontawesome-free';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oh-app';
  faCoffee = faCoffee;
  faHeartO =faRupeeSign;

}
