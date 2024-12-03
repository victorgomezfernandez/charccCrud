import { Component, OnInit } from '@angular/core';
import {StatsService} from "../services/stats.service";

@Component({
  selector: 'app-charcc-stats',
  templateUrl: './charcc-stats.page.html',
  styleUrls: ['./charcc-stats.page.scss'],
})
export class CharccStatsPage implements OnInit {

  stats: any = [];

  constructor(private statsService : StatsService) { }

  ngOnInit() {
    this.getAllStats();
  }

  getAllStats(){
    this.statsService.getStats().subscribe(response => {
      this.stats = response;
    })
  }

}
