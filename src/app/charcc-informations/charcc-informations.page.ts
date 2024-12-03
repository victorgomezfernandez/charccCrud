import { Component, OnInit } from '@angular/core';
import {InformationsService} from "../services/informations.service";

@Component({
  selector: 'app-charcc-informations',
  templateUrl: './charcc-informations.page.html',
  styleUrls: ['./charcc-informations.page.scss'],
})
export class CharccInformationsPage implements OnInit {

  informations: any = [];

  constructor(private informationsService : InformationsService) { }

  ngOnInit() {
    this.getAllInformations();
  }

  getAllInformations(){
    this.informationsService.getInformations().subscribe(response => {
      this.informations = response;
    })
  }

}
