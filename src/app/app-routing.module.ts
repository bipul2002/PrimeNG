import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCardComponent } from './component/add-card/add-card.component';

const routes: Routes = [
  
  {path: 'add-card', component: AddCardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
