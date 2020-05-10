import { Component, OnInit } from "@angular/core";
import {
  faCoffee,
  faHeart,
  faHeartBroken,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagramSquare,
  faGooglePlus,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "oh-site-footer",
  templateUrl: "./site-footer.component.html",
  styleUrls: ["./site-footer.component.scss"],
})
export class SiteFooterComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagramSquare;
  faGooglePlus = faGooglePlus;
  faPinterest = faPinterest;

  constructor() {}

  ngOnInit(): void {}
  openSocialMediaAccounts(urlLink) {
    window.open(urlLink);
 }
}
