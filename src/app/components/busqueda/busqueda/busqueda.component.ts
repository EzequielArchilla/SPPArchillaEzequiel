import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/class/pelicula/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  peliculaSeleccionada: Pelicula = new Pelicula();

  constructor() {}

  ngOnInit(): void {}

  mostrarDetallePelicula(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;
  }
}
