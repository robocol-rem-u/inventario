import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoUsuarioComponent } from './ingreso-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [IngresoUsuarioComponent],
  exports:[IngresoUsuarioComponent]
})
export class IngresoUsuarioModule { }
