import {Component, OnInit} from '@angular/core';
import {StatsService} from "../services/stats.service";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-charcc-stats',
  templateUrl: './charcc-stats.page.html',
  styleUrls: ['./charcc-stats.page.scss'],
})
export class CharccStatsPage implements OnInit {

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

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.characterId = +id;
      this.form.patchValue({character_id: this.characterId});
      this.statsService.getStatsByCharacterId(this.characterId).subscribe({
        next: (stats) => {
          if (stats && stats.length > 0) {
            this.statsId = stats[0].id;
            this.form.patchValue(stats[0]);
          }
        },
        error: (error) => {
          console.error('Error al cargar estadísticas:', error);
        },
      });
    } else {
      console.error('No se proporcionó ID del personaje en la ruta.');
    }
  }


  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;

      if (this.statsId) {
        this.statsService.updateStats(this.statsId, formData).subscribe({
          next: (response) => {
            console.log('Estadísticas actualizadas con éxito', response);
          },
          error: (error) => {
            console.error('Error al actualizar estadísticas:', error);
          },
        });
      } else {
        this.statsService.saveStats(formData).subscribe({
          next: (response) => {
            console.log('Estadísticas guardadas con éxito', response);
          },
          error: (error) => {
            console.error('Error al guardar estadísticas:', error);
          },
        });
      }
    } else {
      console.log('Formulario no válido');
    }
  }
}

