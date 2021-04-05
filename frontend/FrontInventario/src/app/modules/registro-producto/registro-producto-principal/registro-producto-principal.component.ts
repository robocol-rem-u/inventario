import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../../services/producto/producto.service'
import {NgForm} from '@angular/forms'
import {Producto} from '../../../models/producto'


@Component({
  selector: 'app-registro-producto-principal',
  templateUrl: './registro-producto-principal.component.html',
  styleUrls: ['./registro-producto-principal.component.scss']
})
export class RegistroProductoPrincipalComponent implements OnInit {

  producto: Producto = new Producto("", "", "", "", "", "", "", "", 0, 0, "");

  constructor(private productoService : ProductoService) { }

  ngOnInit(): void {
  }

  addProduct(form : NgForm){
    this.productoService.createProduct(form.value).subscribe(
      res => {
        console.log(res),
        form.reset
      },
      err => console.error(err)
    );
  }
  
}
