import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";

import {IonicModule} from '@ionic/angular';

import {CharccInformationsPageRoutingModule} from './charcc-informations-routing.module';

import {CharccInformationsPage} from './charcc-informations.page';

const routes: Routes = [
  {
    path: '',
    component: CharccInformationsPage,
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharccInformationsPageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CharccInformationsPage],
  exports: [RouterModule],
})
export class CharccInformationsPageModule {
}
