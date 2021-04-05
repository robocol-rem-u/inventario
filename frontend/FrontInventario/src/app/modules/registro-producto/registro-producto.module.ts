import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RegistroProductoPrincipalComponent } from './registro-producto-principal/registro-producto-principal.component';



@NgModule({
  declarations: [RegistroProductoPrincipalComponent],
  exports: [RegistroProductoPrincipalComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class RegistroProductoModule { }
