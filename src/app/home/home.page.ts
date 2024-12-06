import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from "../services/characters.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(
    private characterService: CharactersService,
    private router: Router
  ) {}

  createCharacter() {
    this.characterService.createCharacter().subscribe(
      (response) => {
        const characterId = response.id;
        this.router.navigate(['/charcc-informations', characterId]);
      },
      (error) => {
        console.error('Error al crear el personaje', error);
      }
    );
  }
}
