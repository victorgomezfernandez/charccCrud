import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private endpoint = 'http://localhost:8080/api/charcc/informations';

  constructor(private router: Router, private httpClient: HttpClient) {}

  createCharacter(){
    this.router.navigateByUrl('/charcc-informations')
  }

}
