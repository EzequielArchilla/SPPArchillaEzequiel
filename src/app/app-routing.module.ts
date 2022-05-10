import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './components/actorAlta/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actorListado/actor-listado/actor-listado.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/peliculaAlta/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/peliculaListado/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  { path: '', redirectTo: 'busqueda', pathMatch: 'full' },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'peliculas/alta', component: PeliculaAltaComponent },
  { path: 'actor/alta', component: ActorAltaComponent },
  { path: 'actor/listado', component: ActorListadoComponent },
  { path: 'peliculas/listado', component: PeliculaListadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
