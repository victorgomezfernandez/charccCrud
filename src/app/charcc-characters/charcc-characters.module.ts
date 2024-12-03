import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharccCharactersPageRoutingModule } from './charcc-characters-routing.module';

import { CharccCharactersPage } from './charcc-characters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharccCharactersPageRoutingModule
  ],
  declarations: [CharccCharactersPage]
})
export class CharccCharactersPageModule {}
