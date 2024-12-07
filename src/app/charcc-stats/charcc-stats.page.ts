import { Component, OnInit } from '@angular/core';
import {StatsService} from "../services/stats.service";
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-charcc-stats',
  templateUrl: './charcc-stats.page.html',
  styleUrls: ['./charcc-stats.page.scss'],
})
export class CharccStatsPage implements OnInit {

  form: FormGroup;

  stats: any = [];

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private httpClient: HttpClient, private router: Router, private statsService: StatsService) {
    this.form = this.fb.group({});
  }

  ngOnInit() {
    const characterId = this.route.snapshot.paramMap.get('id');
    console.log('Character ID:', characterId);
    this.form = this.fb.group({
      strength: ['', Validators.required],
      dexterity: ['', Validators.required],
      constitution: ['', Validators.required],
      intelligence: ['', Validators.required],
      wisdom: ['', Validators.required],
      charisma: ['', Validators.required],
      character_id: [characterId],
    })
  }


}
