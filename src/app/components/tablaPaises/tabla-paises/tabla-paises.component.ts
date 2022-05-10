import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { APIServiceService } from 'src/app/services/apiService/api-service.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css'],
})
export class TablaPaisesComponent implements OnInit {
  @Output() paisOut: EventEmitter<string> = new EventEmitter();

  paises?: any[];
  radioButton?: HTMLElement | null;
  paisSeleccionado: string = '';

  constructor(private apiService: APIServiceService) {}

  ngOnInit(): void {
    this.apiService.ObtenerPaises().subscribe((data: any) => {
      this.paises = data.filter(
        (pais: any) =>
          pais.name.common == 'Argentina' ||
          pais.name.common == 'Uruguay' ||
          pais.name.common == 'Chile'
      );
    });
  }

  valueChange() {
    this.paisOut.emit(this.paisSeleccionado);
  }
}
