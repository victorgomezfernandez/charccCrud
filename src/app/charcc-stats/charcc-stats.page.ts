import {Component, OnInit} from '@angular/core';
import {StatsService} from "../services/stats.service";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-charcc-stats',
  templateUrl: './charcc-stats.page.html',
  styleUrls: ['./charcc-stats.page.scss'],
})
export class CharccStatsPage {

  characterId!: number;
  statsId!: number | null;

  stats: any = [];
  form: FormGroup;

  constructor(private statsService: StatsService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.form = this.fb.group({
      strength: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
      dexterity: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
      constitution: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
      intelligence: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
      wisdom: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
      charisma: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
      character_id: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
    })
  }
}

