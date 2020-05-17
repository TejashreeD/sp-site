import { Component, OnInit } from '@angular/core';
import { CommonFunctionsService } from '../../core/services/common-functions.service';

@Component({
    selector: 'app-faq-page',
    templateUrl: './faq-page.component.html',
    styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

    constructor(private commonFunctionsService: CommonFunctionsService) { }

    ngOnInit(): void {
    }
    getHeight() {
        return this.commonFunctionsService.getHeight();
    }

}
