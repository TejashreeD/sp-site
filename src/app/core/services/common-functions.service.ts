import { Injectable } from '@angular/core';
import { HostListener } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonFunctionsService {
    innerWidth;
    height;

    constructor() { }
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth;
        this.height = window.innerHeight;
    }

    getHeight() {
        return this.height = window.innerHeight;
    }
}
