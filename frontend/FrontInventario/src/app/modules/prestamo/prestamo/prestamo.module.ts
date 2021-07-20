import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamoComponent } from './prestamo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrestamoComponent],
 exports:[PrestamoComponent]
})
export class PrestamoModule { }
