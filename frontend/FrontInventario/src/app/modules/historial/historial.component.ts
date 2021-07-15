import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HistorialService } from 'src/app/services/historial/historial.service';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { Historial } from "../../models/historial"
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {


  idProducto : string

  historial: Historial[]
  constructor(private historialService: HistorialService, private router: Router, private toastr: ToastrService) { }

  getHistorial():void{
    this.historialService.getHistorialProduct(this.idProducto)
    .subscribe(historial => {this.historial=historial
        if(this.historial.length == 0){
          this.toastr.info("No hay ningún movimiento del producto", "Hey", {
            timeOut: 0
          });
        }
      },
      err => {
        console.log(err);
        this.toastr.error("Hubo un problema al buscar el historial", "Ups!", {
          timeOut: 0
        });
      })

  }
  btnClick= function () {
    console.log("llega :'v ")
    this.router.navigate(["/robocol/disponibilidad/",this.idProducto])
    }

  ngOnInit() {
    console.log(this.idProducto)
    this.getHistorial()
    console.log("este seria el historial"+this.historial)

  }

}
