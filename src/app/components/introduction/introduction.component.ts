import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { faAngleDown, faArrowCircleUp, faGift, faEnvelope, faTruck } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';

// services
import { CommonFunctionsService } from '../../../app/core/services/common-functions.service';
import { Router } from '@angular/router';

@Component({
    selector: 'introduction',
    templateUrl: './introduction.component.html',
    styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
    faArrowCircleDown = faAngleDown;
    faGift = faGift;
    faEnvelope = faEnvelope;
    faTruck = faTruck;

    innerWidth;
    height;

    constructor(@Inject(DOCUMENT) private document: Document,
        private commonFunctionsService: CommonFunctionsService,
        private router: Router) { }

    ngOnInit(): void {
        this.innerWidth = window.innerWidth;
    }
    goToDiv(divId) {
        document.getElementById(divId).scrollIntoView();

    }
    getHeight() {
        this.height = this.commonFunctionsService.getHeight();
        return this.height;
    }
    navigateTo (path) {
        this.router.navigate(['/'+path]);
    }


}
