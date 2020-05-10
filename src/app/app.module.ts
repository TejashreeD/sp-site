import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderComponent } from './header/header.component';
import { WebsiteModule } from './site-components/image-carousel/website.module';
import { CardRowComponent } from './site-components/card-row/card-row.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestimonialComponent } from './site-components/testimonial/testimonial.component';
import { SiteFooterComponent } from './site-components/site-footer/site-footer.component';
import { MultistepFormComponent } from './site-components/multistep-form/multistep-form.component';
@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    HeaderComponent,
    CardRowComponent,
    ProductListComponent,
    TestimonialComponent,
    SiteFooterComponent,
    MultistepFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebsiteModule,
    FontAwesomeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
