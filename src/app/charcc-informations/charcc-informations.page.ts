import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-charcc-informations',
  templateUrl: './charcc-informations.page.html',
  styleUrls: ['./charcc-informations.page.scss'],
})
export class CharccInformationsPage implements OnInit {

  form: FormGroup;
  private endpoint = 'http://localhost:8080/api/charcc/informations';

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private httpClient: HttpClient, private router: Router) {
    this.form = this.fb.group({});
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      level: ['', Validators.required],
      charClass: ['', Validators.required],
      race: ['', Validators.required],
      factions: ['', Validators.required],
      traits: ['', Validators.required],
      ideals: ['', Validators.required],
      flaws: ['', Validators.required],
      bonds: ['', Validators.required],
      backstory: ['', Validators.required],
    });
  }

  saveInformation() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log('Datos del formulario: ', formData);
      this.httpClient.post(this.endpoint, formData).subscribe({
        next: (response: any) => {
          console.log('Información guardada con éxito', response);
          const id = response.id;
          this.router.navigate(['/charcc-stats', id]);
        },
        error: (err) => {
          console.error('Error al guardar la información', err);
        },
      });
    } else {
      console.log('El formulario no es válido');
    }
  }

}
