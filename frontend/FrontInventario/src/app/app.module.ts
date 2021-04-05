import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
// Igx
import { IgxListModule } from 'igniteui-angular';
// Registro de Producto
import { RegistroProductoModule } from './modules/registro-producto/registro-producto.module';
import { RegistroProductoPrincipalComponent } from './modules/registro-producto/registro-producto-principal/registro-producto-principal.component';
// Plan de compra
import { PlanCompraModule } from './planCompra/planCompra.module';
import { PlanCompraPrincipalComponent } from './planCompra/planCompra-principal/planCompra-principal.component';
//Registro de usuario
import { Registro_usuarioModule } from './registro_usuario/registro_usuario.module';
import { Registro_usuarioComponent } from './registro_usuario/registro_usuario.component';
//menu de opciones
import { Menu_opcionesModule } from './menu_opciones/menu_opciones.module';
import { Menu_opcionesComponent } from './menu_opciones/menu_opciones.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RegistroProductoModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'registroProducto', component: RegistroProductoPrincipalComponent },
      { path: 'planCompra', component: PlanCompraPrincipalComponent },
      { path: 'registroUsuario', component: Registro_usuarioComponent },
      { path: 'menu', component: Menu_opcionesComponent },
    ]),
    BrowserAnimationsModule,
    FormsModule,
    IgxListModule,
    Registro_usuarioModule,
    Menu_opcionesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
