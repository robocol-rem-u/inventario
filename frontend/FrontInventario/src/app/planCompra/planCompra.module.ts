import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PlanCompraPrincipalComponent } from './planCompra-principal/planCompra-principal.component';
import { PlanCompraFormularioComponent } from './planCompra-formulario/planCompra-formulario.component';
// import { RegistroImagenComponent } from './registro-imagen/registro-imagen.component';
// import { RegistroBotonesComponent } from './registro-botones/registro-botones.component';

@NgModule({
  declarations: [PlanCompraPrincipalComponent, PlanCompraFormularioComponent],// RegistroImagenComponent, RegistroBotonesComponent],
  exports: [PlanCompraPrincipalComponent, PlanCompraFormularioComponent],// RegistroImagenComponent, RegistroBotonesComponent],
  imports: [CommonModule]
})
export class PlanCompraModule { }
