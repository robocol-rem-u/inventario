import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu_opcionesComponent } from './menu_opciones.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, ],
  declarations: [Menu_opcionesComponent] ,
  exports: [Menu_opcionesComponent],
})
export class Menu_opcionesModule {}
