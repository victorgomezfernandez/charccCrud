import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";

import {IonicModule} from '@ionic/angular';

import {CharccStatsPageRoutingModule} from './charcc-stats-routing.module';

import {CharccStatsPage} from './charcc-stats.page';

const routes: Routes = [
  {
    path: '',
    component: CharccStatsPage,
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharccStatsPageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CharccStatsPage],
  exports: [RouterModule],
})

export class CharccStatsPageModule {
}
