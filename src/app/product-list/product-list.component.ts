import { Component, OnInit } from '@angular/core';
import { faEye, faHeart  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'oh-app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  faEye = faEye;
  faHeart = faHeart;
  constructor() { }

  ngOnInit(): void {
  }

}
