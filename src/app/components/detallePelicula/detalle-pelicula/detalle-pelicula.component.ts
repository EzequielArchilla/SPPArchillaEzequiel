import { Component, Input, OnInit } from '@angular/core';
import { Pelicula, tipoPelicula } from 'src/app/class/pelicula/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css'],
})
export class DetallePeliculaComponent implements OnInit {
  @Input() detallePelicula: Pelicula = new Pelicula();

  constructor() {}

  ngOnInit(): void {}
}
