import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-charcc-characters',
  templateUrl: './charcc-characters.page.html',
  styleUrls: ['./charcc-characters.page.scss'],
})
export class CharccCharactersPage implements OnInit {

  characters: any = [];

  constructor(private charactersService : CharactersService) { }

  ngOnInit() {
    this.getAllCharacters();
  }

  getAllCharacters(){
    this.charactersService.getCharacters().subscribe(response => {
      this.characters = response;
    })
  }

}
