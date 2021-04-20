import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PlanCompraPrincipalComponent } from './planCompra-principal/planCompra-principal.component';
import { PlanCompraFormularioComponent } from './planCompra-formulario/planCompra-formulario.component';
import { PlanCompraProductosComponent } from './planCompra-productos/planCompra-productos.component';
import { PlanCompraOpcionesComponent } from './planCompra-opciones/planCompra-opciones.component';
import { PlanCompraNuevoComponent } from './planCompra-nuevo/planCompra-nuevo.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		PlanCompraPrincipalComponent,
		PlanCompraFormularioComponent,
		PlanCompraProductosComponent,
		PlanCompraOpcionesComponent,
		PlanCompraNuevoComponent
	],
	exports: [
		PlanCompraPrincipalComponent,
		PlanCompraFormularioComponent,
		PlanCompraProductosComponent,
		PlanCompraOpcionesComponent,
		PlanCompraNuevoComponent
	],
	imports: [CommonModule, RouterModule, FormsModule]
})
export class PlanCompraModule
{

}
