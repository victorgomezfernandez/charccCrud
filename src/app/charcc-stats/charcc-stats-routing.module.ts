import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharccStatsPage } from './charcc-stats.page';

const routes: Routes = [
  {
    path: '',
    component: CharccStatsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharccStatsPageRoutingModule {}
