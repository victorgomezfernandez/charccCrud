import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-charcc-characters',
  templateUrl: './charcc-characters.page.html',
  styleUrls: ['./charcc-characters.page.scss'],
})
export class CharccCharactersPage {

  characters: any = [];

  constructor(private charactersService : CharactersService, private router: Router) { }


}
