import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo.component';
import { CatalogoProductoComponent } from './catalogo-producto/catalogo-producto/catalogo-producto.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CatalogoComponent, 
    CatalogoProductoComponent],
  exports:[ 
    CatalogoComponent, 
    CatalogoProductoComponent ]
})
export class CatalogoModule { }
