import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PlanCompraPrincipalComponent } from './planCompra-principal/planCompra-principal.component';
import { PlanCompraFormularioComponent } from './planCompra-formulario/planCompra-formulario.component';
import { PlanCompraProductosComponent } from './planCompra-productos/planCompra-productos.component';

@NgModule({
  declarations: [PlanCompraPrincipalComponent, PlanCompraFormularioComponent, PlanCompraProductosComponent],
  exports: [PlanCompraPrincipalComponent, PlanCompraFormularioComponent, PlanCompraProductosComponent],
  imports: [CommonModule]
})
export class PlanCompraModule { }
