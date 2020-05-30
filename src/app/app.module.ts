import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderComponent } from './header/header.component';
import { WebsiteModule } from './site-components/image-carousel/website.module';
import { CardRowComponent } from './site-components/card-row/card-row.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestimonialComponent } from './site-components/testimonial/testimonial.component';
import { SiteFooterComponent } from './site-components/site-footer/site-footer.component';
import { MultistepFormComponent } from './site-components/multistep-form/multistep-form.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { CreateBasicCardComponent } from './components/create-basic-card/create-basic-card.component';

// services
import { CommonFunctionsService } from './core/services/common-functions.service';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './components/cart/cart.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { HttpClientModule } from '@angular/common/http'
import { ProductListService } from './components/product-list/product-list.service';
import { CreateCustomCardComponent } from './components/create-custom-card/create-custom-card.component';
import { ProductSelectionComponent } from './components/product-selection/product-selection.component';
import { CustomCardPolicyComponent } from './components/custom-card-policy/custom-card-policy.component';
@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    HeaderComponent,
    CardRowComponent,
    ProductListComponent,
    TestimonialComponent,
    SiteFooterComponent,
    MultistepFormComponent,
    IntroductionComponent,
    CreateBasicCardComponent,
    CardComponent,
    CartComponent,
    FaqPageComponent,
    ContactDetailsComponent,
    ContactListComponent,
    CreateCustomCardComponent,
    ProductSelectionComponent,
    CustomCardPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebsiteModule,
    FontAwesomeModule,
    FormsModule,
    HttpModule,
    HttpClientModule
    ],
  providers: [CommonFunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
