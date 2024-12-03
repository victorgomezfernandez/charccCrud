import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharccInformationsPage } from './charcc-informations.page';

const routes: Routes = [
  {
    path: '',
    component: CharccInformationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharccInformationsPageRoutingModule {}
