import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharccStatsPageRoutingModule } from './charcc-stats-routing.module';

import { CharccStatsPage } from './charcc-stats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharccStatsPageRoutingModule
  ],
  declarations: [CharccStatsPage]
})
export class CharccStatsPageModule {}
