import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../../services/producto/producto.service'
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

  constructor(private productoService : ProductoService, private router: Router) { }

  ngOnInit(): void {
  }

  btnClick = function () {
    this.router.navigateByUrl('/menu');
  };

  addProductByHtml(nombre: HTMLInputElement, proveedor: HTMLSelectElement, familia: HTMLSelectElement, ubicacionEnCubiculo: HTMLSelectElement, descripcion: HTMLTextAreaElement, cantidadTotal: HTMLInputElement){
    this.productoService.createProductByHtml(nombre.value, proveedor.value, familia.value, ubicacionEnCubiculo.value, descripcion.value, cantidadTotal.value, this.file).subscribe(
      res => console.log(res), err => console.log(err)
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
