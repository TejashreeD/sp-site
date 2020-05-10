import { Component, OnInit } from '@angular/core';
import { faGrinStars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'oh-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  faGrinStars = faGrinStars;
  constructor() { }

  ngOnInit(): void {
  }

}
