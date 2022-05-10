import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/peliculaAlta/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './components/actorAlta/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actorListado/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './components/peliculaListado/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './components/tablaPelicula/tabla-pelicula/tabla-pelicula.component';
import { FirebaseModule } from './firebase/firebase/firebase.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetallePeliculaComponent } from './components/detallePelicula/detalle-pelicula/detalle-pelicula.component';
import { TablaPaisesComponent } from './components/tablaPaises/tabla-paises/tabla-paises.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    PeliculaAltaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
