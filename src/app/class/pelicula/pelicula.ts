export class Pelicula {
  id: number;
  nombre: string;
  tipo: tipoPelicula;
  fechaDeEstreno: Date;
  cantidadDePublico: number;
  fotoDePelicula: string;

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.tipo = tipoPelicula.otros;
    this.fechaDeEstreno = new Date();
    this.cantidadDePublico = 0;
    this.fotoDePelicula = '';
  }
}

export enum tipoPelicula {
  terror,
  comedia,
  amor,
  otros,
}
