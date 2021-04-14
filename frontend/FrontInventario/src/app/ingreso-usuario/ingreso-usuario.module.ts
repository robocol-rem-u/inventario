import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoUsuarioComponent } from './ingreso-usuario.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IngresoUsuarioComponent],
  exports:[IngresoUsuarioComponent]
})
export class IngresoUsuarioModule { }
