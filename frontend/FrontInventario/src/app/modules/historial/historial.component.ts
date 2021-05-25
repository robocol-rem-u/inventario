import { Component, OnInit, Input } from '@angular/core';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { Historial } from "../../models/historial"
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  @Input() idProducto : string
  historial: Historial[]
  constructor(private productoService: ProductoService) { }

  getHistorial():void{
    this.productoService.getHistorialProduct(this.idProducto)
    .subscribe(historial => this.historial=historial)
  }
  ngOnInit() {
    console.log(this.idProducto)
    this.getHistorial()
    console.log("este seria el historial"+this.historial)

  }

}
