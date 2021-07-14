import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialModule } from '../historial/historial.module';
import { CatalogoRegistroActividadComponent } from './catalogo-registroActividad/catalogo-registroActividad.component';

@NgModule({
  imports: [
    CommonModule, HistorialModule
  ],
  declarations: [

    CatalogoRegistroActividadComponent
  ],
  exports:[
    CatalogoRegistroActividadComponent ]
})
export class CatalogoModule { }
