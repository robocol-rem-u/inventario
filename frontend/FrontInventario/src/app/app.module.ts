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
//menu de opciones
import { Menu_opcionesModule } from './modules/menu_opciones/menu_opciones.module';
import { Menu_opcionesComponent } from './modules/menu_opciones/menu_opciones.component';
import { IngresoUsuarioModule } from './modules/ingreso-usuario/ingreso-usuario.module';
import { IngresoUsuarioComponent } from './modules/ingreso-usuario/ingreso-usuario.component';
import { HistorialComponent } from './modules/historial/historial.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RegistroProductoModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'registroProducto', component: RegistroProductoPrincipalComponent },
      { path: 'planCompra', component: PlanCompraPrincipalComponent },
      { path: 'menu', component: Menu_opcionesComponent },
      { path: 'ingreso-usuario', component: IngresoUsuarioComponent},
      { path:'', pathMatch:'full', redirectTo: 'ingreso-usuario'},
      { path: 'historial', component: HistorialComponent}
    ]),
    BrowserAnimationsModule,
    FormsModule,
    IgxListModule,
    Menu_opcionesModule,
    IngresoUsuarioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
