import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CharactersService} from "../services/characters.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  characters: any = [];

  constructor(private router: Router, private charactersService: CharactersService) {
  }

  ngOnInit() {
    this.getAllCharacters();
  }

  getAllCharacters() {
    this.charactersService.getCharacters().subscribe(response => {
      this.characters = response;
    })
  }

  createCharacter() {
    this.charactersService.createCharacter().subscribe({
      next: (character) => {
        this.router.navigate(['/charcc-informations', character.id]);
      },
      error: (error) => {
        console.error('Error al crear ', error);
      }
    })
  }


  goToCharacters() {
    this.router.navigateByUrl("/charcc-characters");
  }

  goToInformations() {
    this.router.navigateByUrl("/charcc-informations")
  }

  goToStats() {
    this.router.navigateByUrl("/charcc-stats")
  }

}
