import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { Producto } from 'src/app/models/producto';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos: Producto[];

  constructor(private router: Router, private productoService: ProductoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.productoService.getProducts().subscribe(
      prs => {
        this.productos = prs;
        console.log(this.productos[1]._id);
      },
      err => {
        console.log(err);
        this.toastr.error("Hubo un problema al buscar los productos", "Ups!", {
          timeOut: 0
        });
      }
    );
  }

  navigate(url:string){
    this.router.navigateByUrl('/robocol/'+url);
  }

  irADisponibilidad(pr: Producto){
    this.router.navigateByUrl("/robocol/disponibilidad/"+pr._id);
  }

}
