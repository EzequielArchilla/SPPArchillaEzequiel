import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/class/actor/actor';
import { ActorFirebaseService } from 'src/app/services/actorFirebase/actor-firebase.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css'],
})
export class ActorAltaComponent implements OnInit {
  paisSeleccionado: string = '';
  nuevoActor: Actor = new Actor();
  actorForm: FormGroup;

  constructor(
    private actorFire: ActorFirebaseService,
    private fb: FormBuilder
  ) {
    this.actorForm = fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.min(18), Validators.max(99)],
      ],
      direccion: ['', Validators.required],
      telefono: ['', [Validators.required]],
    });

    console.log();
  }

  ngOnInit(): void {}

  asignarPaisSeleccionado(pais: string) {
    this.paisSeleccionado = pais;
  }

  crearActor() {
    //console.log(this.actorForm.getRawValue());
    this.nuevoActor.nombre = this.actorForm.controls['nombre'].value;
    this.nuevoActor.apellido = this.actorForm.controls['apellido'].value;
    this.nuevoActor.email = this.actorForm.controls['email'].value;
    this.nuevoActor.direccion = this.actorForm.controls['direccion'].value;
    this.nuevoActor.telefono = this.actorForm.controls['telefono'].value;
    this.actorFire.crearActor(this.nuevoActor);
  }

  // CUSTOM VALIDATOR
  // private spacesValidator(control: AbstractControl): null | object {
  //   const nombre = <string>control.value;
  //   const spaces = nombre.includes(' ');

  //   return spaces ? { containsSpaces: true } : null;
  // }
}
