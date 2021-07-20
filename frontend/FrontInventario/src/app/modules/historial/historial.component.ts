import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HistorialService } from 'src/app/services/historial/historial.service';
import { Historial } from "../../models/historial"
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {


  idProducto : string

  historial: Historial[]
  constructor( private router:Router,private historialService: HistorialService, private route:ActivatedRoute, private toastr: ToastrService) { }

  btnClick= function () {
        this.router.navigate(["/robocol/disponibilidad/",this.idProducto])
    }
  getHistorial():void{
    console.log("entre aca")
    this.historialService.getHistorialProduct(this.idProducto)
    .subscribe(historial => {this.historial=historial
      console.log("ssss", historial)
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


  ngOnInit() {
    this.idProducto=this.route.snapshot.paramMap.get('id');
    this.historialService.getHistorialProduct(this.idProducto).subscribe(
      his => {
        this.historial = his;
        console.log("ssss", his, "eeeeeeeeeeeee", this.historial)
        if(this.historial.length == 0){
          this.toastr.info("No hay ningún producto para mostrar", "Hey", {
            timeOut: 0
          });
        }
      },
      err => {
        console.log(err);
        this.toastr.error("Hubo un problema al buscar los productos", "Ups!");
      }
    );
    this.getHistorial()
    console.log("este seria el historial"+this.historial)
  }

}
