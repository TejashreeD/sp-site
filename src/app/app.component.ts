import { Component, HostListener, Inject } from '@angular/core';
import { faAngleDown, faGift, faEnvelope, faTruck } from '@fortawesome/free-solid-svg-icons';
// import {     } from '@fortawesome/fontawesome-free';
import { DOCUMENT } from '@angular/common';

import {
    faFacebook,
    faTwitter,
    faInstagramSquare,
    faGooglePlus,
    faPinterest,
} from "@fortawesome/free-brands-svg-icons";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(@Inject(DOCUMENT) private document: Document) { }

    title = 'oh-app';
    faFacebook = faFacebook;
    faTwitter = faTwitter;
    faInstagram = faInstagramSquare;
    faGooglePlus = faGooglePlus;
    faPinterest = faPinterest;
    innerWidth;
    height;
    faArrowCircleDown = faAngleDown;
    faGift = faGift;
    faEnvelope = faEnvelope;
    faTruck = faTruck;
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.height = window.innerHeight;
    }
    openSocialMediaAccounts(urlLink) {
        window.open(urlLink);
    }
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth;
        this.height = window.innerHeight;
    }
    @HostListener('window:scroll', [])
    onWindowScroll(event) {
        if (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20) {
            document.getElementById('navbar').classList.add('bg-light');
        } else {
            document.getElementById('navbar').classList.remove('bg-light');

        }
    }

    getHeight() {
        return this.height;
    }
    goToDiv(divId) {
        document.getElementById(divId).scrollIntoView();

    }
}
