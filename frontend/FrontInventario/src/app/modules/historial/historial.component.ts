import { Component, OnInit, Input } from '@angular/core';
import { HistorialService } from 'src/app/services/historial/historial.service';
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
  constructor(private historialService: HistorialService) { }

  getHistorial():void{
    this.historialService.getHistorialProduct(this.idProducto)
    .subscribe(historial => this.historial=historial)
  }
  ngOnInit() {
    console.log(this.idProducto)
    this.getHistorial()
    console.log("este seria el historial"+this.historial)

  }

}
