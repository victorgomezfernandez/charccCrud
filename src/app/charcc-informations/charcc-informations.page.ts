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
    const characterId = this.route.snapshot.paramMap.get('id');
    console.log('Character ID:', characterId); // Verifica que el ID no sea nulo o undefined
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
      character_id: [characterId],
    });
  }


  saveInformation() {
    if (this.form.valid) {
      const formData = this.form.value;
      formData.character_id = +formData.character_id;

      console.log('Datos del formulario a enviar:', formData);

      this.httpClient.post(this.endpoint, formData).subscribe({
        next: (response) => {
          console.log('Información guardada con éxito', response);
          this.router.navigate(['/']);
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
