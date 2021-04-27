import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MensajesPrincipalComponent } from './mensajes-principal/mensajes-principal.component';



@NgModule({
  declarations: [MensajesPrincipalComponent],
  exports: [MensajesPrincipalComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class MensajesModule { }
