import { Component, OnInit } from '@angular/core';
import { InformationsService } from "../services/informations.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-charcc-informations',
  templateUrl: './charcc-informations.page.html',
  styleUrls: ['./charcc-informations.page.scss'],
})
export class CharccInformationsPage implements OnInit {

  characterId!: number;
  form: FormGroup;

  constructor(
    private informationsService: InformationsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      level: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
      charClass: ['', Validators.required],
      race: ['', Validators.required],
      factions: ['', Validators.required],
      traits: ['', Validators.required],
      ideals: ['', Validators.required],
      flaws: ['', Validators.required],
      bonds: ['', Validators.required],
      backstory: ['', Validators.required],
      character_id: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.characterId = params['id'];
      this.form.controls['character_id'].setValue(this.characterId);
    });
  }
}
