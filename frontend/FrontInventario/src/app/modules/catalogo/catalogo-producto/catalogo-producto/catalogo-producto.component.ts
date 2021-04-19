import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo-producto',
  templateUrl: './catalogo-producto.component.html',
  styleUrls: ['./catalogo-producto.component.scss']
})
export class CatalogoProductoComponent implements OnInit {

  lista:string[]=["Motor","Cámara","Cable","Modem","Jetson"];
  
  constructor() { }

  ngOnInit() {
  }

}
