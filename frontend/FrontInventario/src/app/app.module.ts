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
// Mensajes
import { MensajesModule } from './modules/mensajes/mensajes.module';
import { MensajesPrincipalComponent } from './modules/mensajes/mensajes-principal/mensajes-principal.component';
// Plan de compra
import { PlanCompraModule } from './modules/planCompra/planCompra.module';
import { PlanCompraPrincipalComponent } from './modules/planCompra/planCompra-principal/planCompra-principal.component';
import { PlanCompraNuevoComponent } from './modules/planCompra/planCompra-nuevo/planCompra-nuevo.component';
import { PlanCompraFormularioComponent } from './modules/planCompra/planCompra-formulario/planCompra-formulario.component';
import { PlanCompraProductosComponent } from './modules/planCompra/planCompra-productos/planCompra-productos.component';
//menu de opciones
import { Menu_opcionesModule } from './modules/menu_opciones/menu_opciones.module';
import { Menu_opcionesComponent } from './modules/menu_opciones/menu_opciones.component';
//Ingreso de usuario
import { IngresoUsuarioModule } from './modules/ingreso-usuario/ingreso-usuario.module';
import { IngresoUsuarioComponent } from './modules/ingreso-usuario/ingreso-usuario.component';
//Historial
import { HistorialComponent } from './modules/historial/historial.component';
import { UsuarioGuard } from './guard/usuario.guard';
//Catalogo
import { CatalogoComponent } from './modules/catalogo/catalogo.component';
import { CatalogoModule } from './modules/catalogo/catalogo.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from './models/usuario';
import { CatalogoRegistroActividadComponent } from './modules/catalogo/catalogo-registroActividad/catalogo-registroActividad.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RegistroProductoModule,
    MensajesModule,
    PlanCompraModule,
    CatalogoModule,
    HttpClientModule,
    RouterModule.forRoot([ /**/
      { path: 'registroProducto', component: RegistroProductoPrincipalComponent, canActivate:[UsuarioGuard] },
      { path: 'mensajes', component: MensajesPrincipalComponent, canActivate:[UsuarioGuard] },
      { path: 'planCompra', component: PlanCompraPrincipalComponent, canActivate:[UsuarioGuard] },
      { path: 'planCompraNuevo', component: PlanCompraNuevoComponent, canActivate:[UsuarioGuard] },
      { path: 'planCompraEstado', component: PlanCompraFormularioComponent, canActivate:[UsuarioGuard] },
      { path: 'menu', component: Menu_opcionesComponent, canActivate:[UsuarioGuard] },
      { path: 'ingreso-usuario', component: IngresoUsuarioComponent},
      { path: '', pathMatch:'full', redirectTo: 'ingreso-usuario'},
      { path: 'historial', component: HistorialComponent, canActivate:[UsuarioGuard]},
      { path: 'catalogo', component: CatalogoComponent, canActivate:[UsuarioGuard] },
      { path: 'registro-actividad', component: CatalogoRegistroActividadComponent}
      /*
      { path: 'registroProducto', component: RegistroProductoPrincipalComponent },
      { path: 'planCompra', component: PlanCompraPrincipalComponent },
      { path: 'menu', component: Menu_opcionesComponent },
      { path: 'catalogo', component: CatalogoComponent },
      { path: 'ingreso-usuario', component: IngresoUsuarioComponent},
      { path: '', pathMatch:'full', redirectTo: 'ingreso-usuario'},
      { path: 'historial', component: HistorialComponent}*/
    ]),
    BrowserAnimationsModule,
    FormsModule,
    IgxListModule,
    Menu_opcionesModule,
    IngresoUsuarioModule,
    NgbModule
  ],
  providers: [UsuarioGuard],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
