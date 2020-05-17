import { Component, OnInit } from '@angular/core';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    faRupeeSign = faRupeeSign;

    cardData = {
        name: 'Beautiful birthday card',
        images: [
            { name: '1st', path: '../../assets/images/pic-img.jpg' },
            { name: '2nd', path: '../../assets/images/pic-img.jpg' },
            { name: '3rd', path: '../../assets/images/pic-img.jpg' }
        ],
        price: 500,
        keyWords: 'card, greetings, love, birthday'
    }
    constructor() { }

    ngOnInit(): void {
    }

}
