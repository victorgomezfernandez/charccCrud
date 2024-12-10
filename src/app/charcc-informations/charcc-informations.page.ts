import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-charcc-informations',
  templateUrl: './charcc-informations.page.html',
  styleUrls: ['./charcc-informations.page.scss'],
})
export class CharccInformationsPage implements OnInit {

  form: FormGroup;
  private endpoint = 'http://localhost:8080/api/charcc/informations';
  private characterId: string | null = null; // Variable para almacenar el id del personaje

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

    this.characterId = this.route.snapshot.paramMap.get('id');

    if (this.characterId) {
      this.loadCharacterData(this.characterId);
    }
  }

  loadCharacterData(id: string) {
    this.httpClient.get(`${this.endpoint}/${id}`).subscribe({
      next: (response: any) => {
        this.form.patchValue(response);
      },
      error: (err) => {
        console.error('Error al cargar los datos del personaje', err);
      }
    });
  }

  saveInformation() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log('Datos del formulario: ', formData);

      if (this.characterId) {
        this.updateCharacter(formData);
      } else {
        this.createCharacter(formData);
      }
    } else {
      console.log('El formulario no es válido');
    }
  }

  createCharacter(formData: any) {
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
  }

  updateCharacter(formData: any) {
    this.httpClient.put(`${this.endpoint}/${this.characterId}`, formData).subscribe({
      next: (response: any) => {
        console.log('Información actualizada con éxito', response);
        this.router.navigate(['/home']);  // Redirigir a la página principal después de actualizar
      },
      error: (err) => {
        console.error('Error al actualizar la información', err);
      },
    });
  }
}
