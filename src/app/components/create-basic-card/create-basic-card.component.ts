import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-create-basic-card',
    templateUrl: './create-basic-card.component.html',
    styleUrls: ['./create-basic-card.component.scss']
})
export class CreateBasicCardComponent implements OnInit {
    showData = false;

    constructor() { }

    ngOnInit(): void {
    }
    showCards() {
        // call for fetching data
        event.preventDefault();
        this.showData = true;
    }


}
