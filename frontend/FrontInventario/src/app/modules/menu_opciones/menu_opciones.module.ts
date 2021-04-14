import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu_opcionesComponent } from './menu_opciones.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [Menu_opcionesComponent] ,
  exports: [Menu_opcionesComponent],
})
export class Menu_opcionesModule {}
