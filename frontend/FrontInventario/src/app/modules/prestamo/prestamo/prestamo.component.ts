import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Prestamo } from 'src/app/models/prestamo';
import { PrestamoService } from 'src/app/services/prestamo/prestamo.service';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {

  idProducto : string

  prestamo: Prestamo[]
  constructor( private router:Router,private prestamoService: PrestamoService, private route:ActivatedRoute, private toastr: ToastrService) { }

  btnClick= function () {
        this.router.navigate(["/robocol/disponibilidad/",this.idProducto])
    }
  getPrestamos():void{
    this.prestamoService.getPrestamoProduct(this.idProducto)
    .subscribe(p => {this.prestamo=p
      console.log("ssss", p)
        if(this.prestamo.length == 0){
          this.toastr.info("No hay ninguna unidad en uso", "Hey", {
            timeOut: 0
          });
        }
      },
      err => {
        console.log(err);
        this.toastr.error("Hubo un problema al buscar tu solicitud", "Ups!", {
          timeOut: 0
        });
      })

  }


  ngOnInit() {
    this.idProducto=this.route.snapshot.paramMap.get('id');
    this.prestamoService.getPrestamoProduct(this.idProducto).subscribe(
      his => {
        this.prestamo = his;
        console.log("ssss", his, "eeeeeeeeeeeee", this.prestamo)
        if(this.prestamo.length == 0){
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
    this.getPrestamos()
    console.log("este seria el historial"+this.prestamo)
  }

}
