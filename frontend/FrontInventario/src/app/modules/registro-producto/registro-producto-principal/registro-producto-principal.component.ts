import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../../services/producto/producto.service'
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

interface HtmlInputEvent extends Event{
  target : HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-registro-producto-principal',
  templateUrl: './registro-producto-principal.component.html',
  styleUrls: ['./registro-producto-principal.component.scss']
})
export class RegistroProductoPrincipalComponent implements OnInit {

  file: File;
  photoSelected: string | ArrayBuffer;

  constructor(private productoService : ProductoService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  btnClick = function () {
    this.router.navigateByUrl('/robocol/menu');
  };

  addProductByHtml(nombre: HTMLInputElement, proveedor: HTMLSelectElement, familia: HTMLSelectElement, ubicacionEnCubiculo: HTMLSelectElement, descripcion: HTMLTextAreaElement, cantidadTotal: HTMLInputElement){
    this.toastr.info("Estamos agregando tu producto al catálogo","Un momento", {
      timeOut: 0
    });
    this.productoService.createProductByHtml(nombre.value, proveedor.value, familia.value, ubicacionEnCubiculo.value, descripcion.value, cantidadTotal.value, this.file).subscribe(
      res => {
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
        this.toastr.error("Lo sentimos, el producto no pudo ser agregado" ,"¡Ups!");
      }
    )
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]){
      this.file = <File> event.target.files[0];
      //image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    } 
  }
  
}
