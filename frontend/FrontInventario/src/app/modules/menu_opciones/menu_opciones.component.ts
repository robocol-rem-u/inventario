import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { HistorialService } from 'src/app/services/historial/historial.service';
import { Historial } from 'src/app/models/historial';

@Component({
  selector: 'app-menu_opciones',
  templateUrl: './menu_opciones.component.html',
  styleUrls: ['./menu_opciones.component.css'],
})
export class Menu_opcionesComponent implements OnInit {
  @Input() usuario: Usuario;
  constructor(private historialService: HistorialService) {}
  ngOnInit() {
    console.log("Creando el historial en el home");
    this.historialService.createHistorial(
      new Historial(3, 'sdafasf', localStorage.getItem('USER'), "612af14a4a4ca10004bf6119", new Date())
    ).subscribe((res) => {
      console.log("Se creó el historial en el home " + res);
    },
    (error) => {
      console.log("Error creando el historial en el home " + error);
    });
  }
}
