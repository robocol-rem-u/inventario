import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo.component';
import { DisponibilidadComponent } from './disponibilidad/disponibilidad.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CatalogoComponent, DisponibilidadComponent],
  exports: [CatalogoComponent, DisponibilidadComponent]
})
export class CatalogoModule { }
