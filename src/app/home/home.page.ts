import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private endpoint = 'http://localhost:8080/api/charcc/characters';

  constructor(private router: Router, private httpClient: HttpClient) {}

  goToCharacters(){
    const newCharacter = {};
    this.httpClient.post<any>(this.endpoint, newCharacter).subscribe({
      next: (response) => {
        const characterId = response.id;
        this.router.navigate(['/charcc-informations', characterId]);
      },
      error: (err) => {
        console.error('Error al crear:', err);
      },
    });
  }

}
