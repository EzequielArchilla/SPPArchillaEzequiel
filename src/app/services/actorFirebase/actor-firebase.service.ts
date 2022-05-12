import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Actor } from 'src/app/class/actor/actor';

@Injectable({
  providedIn: 'root',
})

export class ActorFirebaseService {
  private actoresRef: AngularFirestoreCollection;

  constructor(private db: AngularFirestore) {
    this.actoresRef = this.db.collection('actores');
  }

  public crearActor(actor: Actor) {
    return this.actoresRef.add({ ...actor });
  }

  public obtenerActor() {
    return this.actoresRef.valueChanges() as Observable<Actor[]>;
  }

  public update(id: string, data: any) {
    return this.actoresRef.doc(id).update(data);
  }

  public delete(id: string) {
    return this.actoresRef.doc(id).delete();
  }

  public obtenerColeccionActores() {
    return this.actoresRef.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a: any) => {
          const data = a.payload.doc.data() as Actor;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  public cambiarValidado(uid: string, validado: boolean) {
    if (validado == true) {
      return this.actoresRef.doc(uid).update({
        validado: false,
      });
    } else {
      return this.actoresRef.doc(uid).update({
        validado: true,
      });
    }
  }

  public obtenerSnapshot() {
    return this.actoresRef.snapshotChanges();
  }
}
