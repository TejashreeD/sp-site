import { Component, OnInit } from '@angular/core';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
    selector: 'oh-app-product-selection',
    templateUrl: './product-selection.component.html',
    styleUrls: ['./product-selection.component.scss']
})
export class ProductSelectionComponent implements OnInit {

    constructor(private router: Router) { }
    faArrowCircleRight = faArrowCircleRight;
    showNext: boolean = true;
    showMsg: boolean = false;
    ngOnInit(): void {
    }
    showNextStep() {
        console.log('next step');
        this.showMsg = true;
    }
    showLastStep(){
        this.showMsg = false;
    }
    navigateTo(path) {
        this.router.navigate(['/' + path]);
    }

}
