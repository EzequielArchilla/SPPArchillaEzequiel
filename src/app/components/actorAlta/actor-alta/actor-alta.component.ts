import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css'],
})
export class ActorAltaComponent implements OnInit {
  paisSeleccionado: string = '';

  constructor() {}

  ngOnInit(): void {}

  asignarPaisSeleccionado(pais: string) {
    this.paisSeleccionado = pais;
  }
}
