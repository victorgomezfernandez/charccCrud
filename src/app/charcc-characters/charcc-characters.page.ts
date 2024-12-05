import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-charcc-characters',
  templateUrl: './charcc-characters.page.html',
  styleUrls: ['./charcc-characters.page.scss'],
})
export class CharccCharactersPage implements OnInit {

  characters: any = [];

  constructor(private charactersService : CharactersService, private router: Router) { }

  ngOnInit() {
    this.getAllCharacters();
  }

  getAllCharacters(){
    this.charactersService.getCharacters().subscribe(response => {
      console.log(response);
      this.characters = response;
    })
  }

}
