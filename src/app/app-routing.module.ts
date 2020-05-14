import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { CreatBasicCardComponent } from './components/creat-basic-card/creat-basic-card.component';


const routes: Routes = [
    {path: '', component: IntroductionComponent},
    {path: 'create-card', component: CreatBasicCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
