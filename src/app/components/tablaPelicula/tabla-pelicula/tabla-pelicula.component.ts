import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula, tipoPelicula } from 'src/app/class/pelicula/pelicula';
import { PeliculaFirebaseService } from 'src/app/services/peliculaFirebase/pelicula-firebase.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css'],
})
export class TablaPeliculaComponent implements OnInit {
  @Output() detallePelicula: EventEmitter<Pelicula> = new EventEmitter();
  listaPeliculas: Pelicula[] = [];

  constructor(private peliculaFire: PeliculaFirebaseService) {
    this.peliculaFire.obtenerPelicula().subscribe((peliculas) => {
      this.listaPeliculas = peliculas;
    });
  }

  ngOnInit(): void {}

  verDetalle(pelicula: Pelicula) {
    this.detallePelicula.emit(pelicula);
  }
}
