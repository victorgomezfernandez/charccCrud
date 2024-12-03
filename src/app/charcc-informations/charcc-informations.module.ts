import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharccInformationsPageRoutingModule } from './charcc-informations-routing.module';

import { CharccInformationsPage } from './charcc-informations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharccInformationsPageRoutingModule
  ],
  declarations: [CharccInformationsPage]
})
export class CharccInformationsPageModule {}
