import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Actor } from 'src/app/class/actor/actor';
import { Pelicula } from 'src/app/class/pelicula/pelicula';
import { ImagenFirebaseService } from 'src/app/services/imagenFirebase/imagen-firebase.service';
import { PeliculaFirebaseService } from 'src/app/services/peliculaFirebase/pelicula-firebase.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css'],
})
export class PeliculaAltaComponent implements OnInit {
  actoresSeleccionados: Actor[] = [];
  peliculaForm: FormGroup;
  nuevaPelicula: Pelicula = new Pelicula();
  portada?: File;

  constructor(
    private peliculaFire: PeliculaFirebaseService,
    private fb: FormBuilder,
    private imagenFire: ImagenFirebaseService,
    private router: Router
  ) {
    this.peliculaForm = fb.group({
      nombre: ['', [Validators.required]],
      fechaDeEstreno: ['', Validators.required],
      cantidadDePublico: [
        '',
        [Validators.required, Validators.min(10), Validators.max(1000)],
      ],
      fotoDePelicula: ['', Validators.required],
    });

    console.log();
  }

  ngOnInit(): void {}

  asignarActor(actor: Actor) {
    this.actoresSeleccionados.push(actor);
  }

  asignarParametrosPelicula() {
    //console.log(this.actorForm.getRawValue());
    this.nuevaPelicula.id = Math.floor(Math.random() * (10000 - 1 + 1) + 1);
    this.nuevaPelicula.nombre = this.peliculaForm.controls['nombre'].value;
    this.nuevaPelicula.fechaDeEstreno =
      this.peliculaForm.controls['fechaDeEstreno'].value;
    this.nuevaPelicula.cantidadDePublico =
      this.peliculaForm.controls['cantidadDePublico'].value;
    this.nuevaPelicula.actores = this.actoresSeleccionados;

    this.peliculaFire
      .crearPelicula(this.nuevaPelicula)
      .then(() => {
        this.router.navigate(['busqueda']);
      })
      .catch(() => {
        console.log('NOT IMPLEMENTED');
      });
  }

  subirArchivo(archivo?: File) {
    var direccion = '';
    if (archivo)
      this.imagenFire.subirArchivo(archivo).then(() => {
        this.imagenFire.get('/portadas/' + archivo.name).subscribe((url) => {
          this.nuevaPelicula.fotoDePelicula = url;
          console.log(url);
        });
      });
  }

  onChange(event: any) {
    this.portada = event.target.files[0];
    this.subirArchivo(this.portada);
  }
}
