import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-creat-basic-card',
    templateUrl: './creat-basic-card.component.html',
    styleUrls: ['./creat-basic-card.component.scss']
})
export class CreatBasicCardComponent implements OnInit {
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
