import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharccCharactersPage } from './charcc-characters.page';

const routes: Routes = [
  {
    path: '',
    component: CharccCharactersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharccCharactersPageRoutingModule {}
