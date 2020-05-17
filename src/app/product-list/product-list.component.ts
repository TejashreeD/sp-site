import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faEye, faHeart  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'oh-app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  faEye = faEye;
  faHeart = faHeart;
  constructor(private router: Router) { }
  cardData = {
      name: 'beautiful card',
      images: [
          {name: '1st', path: '../../assets/images/pic-img.jpg'},
          {name: '2nd', path: '../../assets/images/pic-img.jpg'},
          {name: '3rd', path: '../../assets/images/pic-img.jpg'}
      ],
      price: 500,
      keyWords: 'card, greetings, love, birthday'
  }

  ngOnInit(): void {
  }

  showCard(cardData, path) {
    cardData = this.cardData;
    this.router.navigate(['/'+path]);
  }

}
