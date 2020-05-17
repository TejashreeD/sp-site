import { Component, HostListener, Inject } from '@angular/core';
import { faArrowCircleUp, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { faFacebook, faTwitter, faInstagramSquare, faGooglePlus, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { CommonFunctionsService } from './core/services/common-functions.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(@Inject(DOCUMENT) private document: Document,
        private route: Router,
        private commonFunctionsService: CommonFunctionsService) { }

    title = 'oh-app';
    faFacebook = faFacebook;
    faTwitter = faTwitter;
    faInstagram = faInstagramSquare;
    faGooglePlus = faGooglePlus;
    faPinterest = faPinterest;
    innerWidth;
    height;
    faAngleUp = faArrowCircleUp;
    faShoppingCart = faShoppingCart;

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
            document.getElementById('go-top').classList.add('d-block');
            document.getElementById('go-top').classList.remove('d-none');

        } else {
            document.getElementById('navbar').classList.remove('bg-light');
            document.getElementById('go-top').classList.remove('d-block');
            document.getElementById('go-top').classList.add('d-none');

        }
    }
    goToDiv(divId) {
        document.getElementById(divId).scrollIntoView();
    }

    getHeight() {
        return this.height;
    }
    goToPath(path) {
        this.route.navigate(['/'+path]);
    }
}
