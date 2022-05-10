import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/class/pelicula/pelicula';

@Injectable({
  providedIn: 'root',
})
export class PeliculaFirebaseService {
  private peliculasRef: AngularFirestoreCollection;

  constructor(private db: AngularFirestore) {
    this.peliculasRef = this.db.collection('peliculas');
  }

  public crearUsuario(pelicula: Pelicula) {
    return this.peliculasRef.add({ ...pelicula });
  }

  public obtenerUsuario() {
    return this.peliculasRef.valueChanges() as Observable<Pelicula[]>;
  }

  public update(id: string, data: any) {
    return this.peliculasRef.doc(id).update(data);
  }

  public delete(id: string) {
    return this.peliculasRef.doc(id).delete();
  }

  public async validarUsuarioEspecialista() {}

  public obtenerColeccionPeliculas() {
    return this.peliculasRef.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a: any) => {
          const data = a.payload.doc.data() as Pelicula;
          const id1 = a.payload.doc.id;
          return { id1, ...data };
        })
      )
    );
  }

  public cambiarValidado(uid: string, validado: boolean) {
    if (validado == true) {
      return this.peliculasRef.doc(uid).update({
        validado: false,
      });
    } else {
      return this.peliculasRef.doc(uid).update({
        validado: true,
      });
    }
  }

  public obtenerSnapshot() {
    return this.peliculasRef.snapshotChanges();
  }
}
