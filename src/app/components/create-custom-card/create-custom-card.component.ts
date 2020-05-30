import { Component, OnInit } from '@angular/core';
import { faVoteYea, faImages, faEnvelope, faTruck } from '@fortawesome/free-solid-svg-icons';

import { CommonFunctionsService } from '../../../app/core/services/common-functions.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-create-custom-card',
    templateUrl: './create-custom-card.component.html',
    styleUrls: ['./create-custom-card.component.scss']
})
export class CreateCustomCardComponent implements OnInit {

    constructor(private commonFunctionsService: CommonFunctionsService,
        private router: Router) { }
    showData = false;
    faGift = faVoteYea;
    faEnvelope = faEnvelope;
    faTruck = faTruck;

    ngOnInit(): void {
    }
    getHeight() {
        return this.commonFunctionsService.getHeight();
    }
    navigateTo(path) {
        this.router.navigate(['/' + path]);
    }
    showCards() {
        // call for fetching data
        event.preventDefault();
        this.showData = true;
        this.router.navigate(['/select-cards'])
    }

}
