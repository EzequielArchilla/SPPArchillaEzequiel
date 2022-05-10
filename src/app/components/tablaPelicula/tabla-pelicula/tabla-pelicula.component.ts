import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula, tipoPelicula } from 'src/app/class/pelicula/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css'],
})
export class TablaPeliculaComponent implements OnInit {
  @Output() detallePelicula: EventEmitter<Pelicula> = new EventEmitter();

  tabla: Pelicula[] = [
    {
      id: 1,
      nombre: 'movie1',
      tipo: tipoPelicula.terror,
      fechaDeEstreno: new Date(),
      cantidadDePublico: 100,
      fotoDePelicula: '../../favicon.ico',
    },
    {
      id: 2,
      nombre: 'movie2',
      tipo: tipoPelicula.terror,
      fechaDeEstreno: new Date(),
      cantidadDePublico: 22,
      fotoDePelicula: '../../favicon.ico',
    },
    {
      id: 3,
      nombre: 'movie3',
      tipo: tipoPelicula.terror,
      fechaDeEstreno: new Date(),
      cantidadDePublico: 676,
      fotoDePelicula: '../../favicon.ico',
    },
    {
      id: 4,
      nombre: 'movie4',
      tipo: tipoPelicula.terror,
      fechaDeEstreno: new Date(),
      cantidadDePublico: 5777,
      fotoDePelicula: '../../favicon.ico',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  verDetalle(pelicula: Pelicula) {
    this.detallePelicula.emit(pelicula);
  }
}
