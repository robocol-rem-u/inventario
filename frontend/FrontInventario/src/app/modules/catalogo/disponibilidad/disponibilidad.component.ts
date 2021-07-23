import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { time } from 'node:console';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.component.html',
  styleUrls: ['./disponibilidad.component.scss']
})
export class DisponibilidadComponent implements OnInit {

   id_producto: string
   producto: Producto
  constructor(private httpClient: HttpClient,
    private router: Router, private route:ActivatedRoute, private productoService: ProductoService, private toastr: ToastrService) { }


  btnClick= function () {
    this.router.navigate(['/robocol/catalogo'])
    }


  irAHistorial(){
    this.router.navigate(["/robocol/historial/",this.id_producto]);
  }
  irAPrestamos(){
    console.log("ir a prestamos")
    this.router.navigate(["/robocol/prestamos/",this.id_producto]);
  }
  ngOnInit() {
   this.id_producto=this.route.snapshot.paramMap.get('id');
   this.productoService.getProductoPorId(this.id_producto).subscribe(
    prs => {
      this.producto = prs;
    },
    err => {
      console.log(err);
      this.toastr.error("Hubo un problema al buscar el detalle del producto", "Ups!", {
        timeOut: 0
      });
    }
  );
  }
  mover(desde:HTMLSelectElement, hasta:HTMLSelectElement, cantidad:HTMLInputElement){

    console.log("move")
    this.toastr.info("Estamos procesando tu solicitud","Un momento", {
      timeOut: 0,
    });
      this.productoService.moverProductoId(this.id_producto,desde.value, hasta.value, cantidad.value ).subscribe(res => {
        this.producto = res;
        this.toastr.clear();
        console.log(res);
        this.toastr.success("El producto fue movido correctamente", "¡Listo!", {
          timeOut: 0
        });
        setTimeout(() =>
          {
            window.location.reload();
          }, 5000);
      },
      error => {
        this.toastr.clear();
        console.error(error);
        this.toastr.error(error.message ,"¡Ups!", );
        return false;

      }
    );
  }

  agregar( agregar:HTMLSelectElement, cantidad:HTMLInputElement){
    console.log("agregar")
    this.toastr.info("Estamos procesando tu solicitud","Un momento", {
      timeOut: 0,
    });
      this.productoService.agregarUnidadProductoId(this.id_producto,agregar.value, cantidad.value ).subscribe(res => {
        this.producto = res;
        this.toastr.clear();
        console.log(res);
        this.toastr.success("El producto fue movido correctamente", "¡Listo!", {
          timeOut: 0
        });
        setTimeout(() =>
          {
            window.location.reload();
          }, 5000);
      },
      error => {
        this.toastr.clear();
        console.error(error);
        this.toastr.error(error.message ,"¡Ups!", );
        return false;

      }
    );
  }
  retirar(eliminar:HTMLSelectElement, cantidad:HTMLInputElement){
    console.log("retirar")
    this.toastr.info("Estamos procesando tu solicitud","Un momento", {
      timeOut: 0,
    });
      this.productoService.botarCantidadProductoId(this.id_producto,eliminar.value, cantidad.value ).subscribe(res => {
        this.producto = res;
        this.toastr.clear();
        console.log(res);
        this.toastr.success("las unidades se eliminaron correctamente", "¡Listo!", {
          timeOut: 0
        });
        setTimeout(() =>
          {
            window.location.reload();
          }, 5000);
      },
      error => {
        this.toastr.clear();
        console.error(error);
        this.toastr.error(error.message ,"¡Ups!", );
        return false;

      }
    );
  }
//   btnClick = function () {
//     console.log("ASDadsfgaega")
//     this.router.navigate('/robocol/catalogo');
//   };

 }
