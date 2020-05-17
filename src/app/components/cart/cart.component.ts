import { Component, OnInit } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { CommonFunctionsService } from '../../core/services/common-functions.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    faShoppingBag = faShoppingBag;

    constructor(private commonFunctionsService: CommonFunctionsService, private route: Router) { }

    ngOnInit(): void {
    }
    getHeight() {
        return this.commonFunctionsService.getHeight();
    }
    navigateToPath(path) {
        this.route.navigate(['/' + path]);
    }

}
