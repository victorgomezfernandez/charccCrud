import {Component, OnInit} from '@angular/core';
import {InformationsService} from "../services/informations.service";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-charcc-informations',
  templateUrl: './charcc-informations.page.html',
  styleUrls: ['./charcc-informations.page.scss'],
})
export class CharccInformationsPage implements OnInit {

  characterId!: number;

  informations: any = [];
  form: FormGroup;

  constructor(private informationsService: InformationsService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
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
    })
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.characterId = +id;
      this.form.patchValue({character_id: this.characterId});
      this.informationsService.getInformationById(this.characterId).subscribe({
        next: (data) => {
          if (data) {
            this.form.patchValue(data);
          }
        },
        error: (error) => {
          console.error('Error al cargar información:', error);
        }
      });
    } else {
      console.error('No se encuentra ID');
    }
  }


  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;

      if (this.characterId) {
        this.informationsService.updateInformation(this.characterId, formData).subscribe({
          next: (response: any) => {  // Usamos 'any' para evitar el error
            console.log('Información actualizada con éxito', response);
            this.router.navigate(['/charcc-stats', this.characterId]);
          },
          error: (error) => {
            console.error('Error al actualizar información:', error);
          }
        });
      } else {
        this.informationsService.saveInformation(formData).subscribe({
          next: (response: any) => {  // Usamos 'any' aquí también
            console.log('Información guardada con éxito', response);
            this.router.navigate(['/charcc-stats', response.character_id]);
          },
          error: (error) => {
            console.error('Error al guardar información:', error);
          }
        });
      }
    } else {
      console.log('Formulario no válido');
    }
  }


}
