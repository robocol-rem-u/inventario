import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo.component';
import { CatalogoProductoComponent } from './catalogo-producto/catalogo-producto/catalogo-producto.component';
import { HistorialModule } from '../historial/historial.module';
import { CatalogoRegistroActividadComponent } from './catalogo-registroActividad/catalogo-registroActividad.component';

@NgModule({
  imports: [
    CommonModule, HistorialModule
  ],
  declarations: [
    CatalogoComponent,
    CatalogoProductoComponent,
    CatalogoRegistroActividadComponent
  ],
  exports:[
    CatalogoComponent,
    CatalogoProductoComponent,
    CatalogoRegistroActividadComponent ]
})
export class CatalogoModule { }
