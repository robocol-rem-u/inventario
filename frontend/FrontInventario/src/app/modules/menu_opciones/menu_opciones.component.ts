import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-menu_opciones',
  templateUrl: './menu_opciones.component.html',
  styleUrls: ['./menu_opciones.component.css'],
})
export class Menu_opcionesComponent implements OnInit {
  @Input() usuario: Usuario
  constructor() {}
  ngOnInit() {}
}
