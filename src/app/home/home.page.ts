import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToCharacters(){
    this.router.navigateByUrl("/charcc-characters");
  }

  goToInformations(){
    this.router.navigateByUrl("/charcc-informations")
  }

  goToStats(){
    this.router.navigateByUrl("/charcc-stats")
  }

}
