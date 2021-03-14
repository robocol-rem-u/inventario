import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RegistroPrincipalComponent } from './registro-principal/registro-principal.component';
import { RegistroFormularioComponent } from './registro-formulario/registro-formulario.component';
import { RegistroImagenComponent } from './registro-imagen/registro-imagen.component';
import { RegistroBotonesComponent } from './registro-botones/registro-botones.component';



@NgModule({
  declarations: [RegistroPrincipalComponent, RegistroFormularioComponent, RegistroImagenComponent, RegistroBotonesComponent],
  exports: [RegistroPrincipalComponent, RegistroFormularioComponent, RegistroImagenComponent, RegistroBotonesComponent],
  imports: [
    CommonModule,
  ]
})
export class RegistroModule { }
