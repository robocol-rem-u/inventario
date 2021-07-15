import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';


@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.component.html',
  styleUrls: ['./disponibilidad.component.scss']
})
export class DisponibilidadComponent implements OnInit {

   id_producto: string
   producto: Producto
  constructor(private router: Router, private route:ActivatedRoute, private productoService: ProductoService, private toastr: ToastrService) { }


  btnClick= function () {
    this.router.navigate(['/robocol/catalogo'])
    }


  irAHistorial(){
    this.router.navigate(["/robocol/historial/",this.id_producto]);
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

//   btnClick = function () {
//     console.log("ASDadsfgaega")
//     this.router.navigate('/robocol/catalogo');
//   };

 }
