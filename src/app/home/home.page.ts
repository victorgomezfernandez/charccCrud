import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {InformationsService} from "../services/informations.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private endpoint = 'http://localhost:8080/api/charcc/informations';

  informations: any = [];

  constructor(private router: Router, private httpClient: HttpClient, private informationsService: InformationsService) {
  }

  ngOnInit() {
    this.getAllInformations();
  }

  createCharacter() {
    this.router.navigateByUrl('/charcc-informations')
  }

  getAllInformations() {
    this.informationsService.getInformations().subscribe(response => {
      this.informations = response;
    })
  }

}
