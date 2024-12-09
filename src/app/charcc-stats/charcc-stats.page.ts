import {Component, OnInit} from '@angular/core';
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
    const informationId = this.route.snapshot.paramMap.get('id');
    console.log('Character ID:', informationId);
    this.form = this.fb.group({
      strength: ['', Validators.required],
      dexterity: ['', Validators.required],
      constitution: ['', Validators.required],
      intelligence: ['', Validators.required],
      wisdom: ['', Validators.required],
      charisma: ['', Validators.required],
      information_id: [Number(informationId), Validators.required],
    });
  }

  saveStats() {
    if (this.form.valid) {
      const statsData = {
        ...this.form.value,
        information: { id: this.form.value.information_id },
      };

      console.log('Datos del formulario de stats: ', statsData);
      this.httpClient.post('http://localhost:8080/api/charcc/stats', statsData).subscribe({
        next: (response) => {
          console.log('Stats guardados con éxito', response);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Error al guardar los stats', err);
        },
      });
    } else {
      console.log('El formulario de stats no es válido');
    }
  }
}
