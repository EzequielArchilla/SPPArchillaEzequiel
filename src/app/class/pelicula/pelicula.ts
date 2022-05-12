import { Actor } from '../actor/actor';

export class Pelicula {
  id: number;
  nombre: string;
  tipo: tipoPelicula;
  fechaDeEstreno: Date;
  cantidadDePublico: number;
  fotoDePelicula: string;
  actores: Actor[];

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.tipo = tipoPelicula.otros;
    this.fechaDeEstreno = new Date();
    this.cantidadDePublico = 0;
    this.fotoDePelicula = '';
    this.actores = [];
  }
}

export enum tipoPelicula {
  terror,
  comedia,
  amor,
  otros,
}
