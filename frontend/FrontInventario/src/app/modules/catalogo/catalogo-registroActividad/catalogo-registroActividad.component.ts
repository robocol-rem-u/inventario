import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo-registroActividad',
  templateUrl: './catalogo-registroActividad.component.html',
  styleUrls: ['./catalogo-registroActividad.component.css']
})
export class CatalogoRegistroActividadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  btnClick = function () {
    this.router.navigateByUrl('/catalogo');
  };

}
