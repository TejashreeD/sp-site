import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { CreateBasicCardComponent } from './components/create-basic-card/create-basic-card.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './components/cart/cart.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { CreateCustomCardComponent } from './components/create-custom-card/create-custom-card.component';
import { ProductSelectionComponent } from './components/product-selection/product-selection.component';
import { CustomCardPolicyComponent } from './components/custom-card-policy/custom-card-policy.component';


const routes: Routes = [
    {path: '', component: IntroductionComponent},
    {path: 'create-card', component: CreateBasicCardComponent},
    {path: 'create-custom-card', component: CreateCustomCardComponent},
    {path: 'select-cards', component: ProductSelectionComponent},
    {path: 'custom-card-policy', component: CustomCardPolicyComponent},
    {path: 'card', component: CardComponent},
    {path: 'cart', component: CartComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'contacts', component: ContactListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
