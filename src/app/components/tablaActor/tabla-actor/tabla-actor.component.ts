import { Component, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/class/actor/actor';
import { ActorFirebaseService } from 'src/app/services/actorFirebase/actor-firebase.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css'],
})
export class TablaActorComponent implements OnInit {
  @Output() actorSeleccionado: EventEmitter<Actor> = new EventEmitter();
  listaActores: Actor[] = [];

  constructor(private actorFire: ActorFirebaseService) {
    actorFire.obtenerActor().subscribe((actores) => {
      this.listaActores = actores;
      console.log(this.listaActores);
    });
  }

  ngOnInit(): void {}

  emitirActor(actor: Actor) {
    this.actorSeleccionado.emit(actor);
  }
}
