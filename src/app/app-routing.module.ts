import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { CreatBasicCardComponent } from './components/creat-basic-card/creat-basic-card.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './components/cart/cart.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';


const routes: Routes = [
    {path: '', component: IntroductionComponent},
    {path: 'create-card', component: CreatBasicCardComponent},
    {path: 'card', component: CardComponent},
    {path: 'cart', component: CartComponent},
    {path: 'faq', component: FaqPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
