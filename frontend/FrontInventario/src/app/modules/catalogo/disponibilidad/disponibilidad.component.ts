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
    this.toastr.info("Estamos agregando tu producto al catálogo","Un momento", {
      timeOut: 0,
    });
      this.productoService.moverProductoId(this.id_producto,desde.value, hasta.value, cantidad.value ).subscribe(res => {
        this.producto = res;
        this.toastr.clear();
        console.log(res);
        this.toastr.success("El producto fue agregado al catálogo", "¡Listo!", {
          timeOut: 0
        });
        setTimeout(() =>
          {
            window.location.reload();
          }, 3000);
      },
      error => {
        this.toastr.clear();
        console.log(error);
        this.toastr.error(error.message,"¡Ups!", );
      }
    );
  }

  agregar(){
    console.log("agregar")
  }
  retirar(){
    console.log("retirar")
  }
//   btnClick = function () {
//     console.log("ASDadsfgaega")
//     this.router.navigate('/robocol/catalogo');
//   };

 }
