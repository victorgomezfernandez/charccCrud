import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharccStatsPageRoutingModule } from './charcc-stats-routing.module';

import { CharccStatsPage } from './charcc-stats.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CharccStatsPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [CharccStatsPage]
})
export class CharccStatsPageModule {}
