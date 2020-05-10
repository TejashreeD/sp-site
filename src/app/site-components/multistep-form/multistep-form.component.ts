import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multistep-form',
  templateUrl: './multistep-form.component.html',
  styleUrls: ['./multistep-form.component.scss']
})
export class MultistepFormComponent implements OnInit {
    showDiv = 'first'
    ;
  constructor() { }

  ngOnInit(): void {
  }
  showNextDiv(divName){
      this.showDiv = divName;
  }
  showCards() {
      console.log('show cards...');

  }
}
