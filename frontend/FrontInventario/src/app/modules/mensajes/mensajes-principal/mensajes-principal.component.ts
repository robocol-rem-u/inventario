import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../../../services/mensajes/mensajes.service'
import { Router } from '@angular/router';

interface HtmlInputEvent extends Event{
  target : HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-mensajes-principal',
  templateUrl: './mensajes-principal.component.html',
  styleUrls: ['./mensajes-principal.component.css']
})
export class MensajesPrincipalComponent implements OnInit
{

  file: File;
  photoSelected: string | ArrayBuffer;

  constructor(private mensajesService : MensajesService, private router: Router) { }

  ngOnInit(): void
  {
  }

  btnClick = function ()
  {
    this.router.navigateByUrl('/menu');
  };

  addProductByHtml(nombre: HTMLInputElement, proveedor: HTMLSelectElement, familia: HTMLSelectElement, ubicacionEnCubiculo: HTMLSelectElement, descripcion: HTMLTextAreaElement, cantidadTotal: HTMLInputElement)
  {
    // this.mensajesService.createProductByHtml(nombre.value, proveedor.value, familia.value, ubicacionEnCubiculo.value, descripcion.value, cantidadTotal.value, this.file).subscribe(
    //   res => console.log(res), err => console.log(err)
    // )
  }

  onPhotoSelected(event: HtmlInputEvent): void
  {
    if (event.target.files && event.target.files[0]){
      this.file = <File> event.target.files[0];
      //image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    } 
  }
  
}
