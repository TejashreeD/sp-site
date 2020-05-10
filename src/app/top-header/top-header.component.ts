import { Component, OnInit } from '@angular/core';
import { faUserTag, faUser, faShoppingCart  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'oh-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  constructor() { }
  // icons
  faUserTag = faUserTag;
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  ngOnInit(): void {
  }

}
