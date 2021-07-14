import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
// Igx
import { IgxListModule } from 'igniteui-angular';
// Registro de Producto
import { RegistroProductoModule } from './modules/registro-producto/registro-producto.module';
import { RegistroProductoPrincipalComponent } from './modules/registro-producto/registro-producto-principal/registro-producto-principal.component';
//menu de opciones
import { Menu_opcionesModule } from './modules/menu_opciones/menu_opciones.module';
import { Menu_opcionesComponent } from './modules/menu_opciones/menu_opciones.component';
//Ingreso de usuario
import { IngresoUsuarioModule } from './modules/ingreso-usuario/ingreso-usuario.module';
import { IngresoUsuarioComponent } from './modules/ingreso-usuario/ingreso-usuario.component';
//Historial
import { HistorialComponent } from './modules/historial/historial.component';
import { UsuarioGuard } from './guard/usuario.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Catalogo
import { CatalogoModule } from './modules/catalogo/catalogo.module';
import { CatalogoComponent } from './modules/catalogo/catalogo.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    RegistroProductoModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'robocol/registroProducto', component: RegistroProductoPrincipalComponent, canActivate:[UsuarioGuard] },
      { path: '/robocol/menu', component: Menu_opcionesComponent, canActivate:[UsuarioGuard] },
      { path: '/robocol/ingreso-usuario', component: IngresoUsuarioComponent},
      { path: '/robocol', pathMatch:'full', redirectTo: 'ingreso-usuario'},
      { path: '/robocol/historial', component: HistorialComponent, canActivate:[UsuarioGuard]},
      { path: '/robocol/catalogo', component: CatalogoComponent, canActivate:[UsuarioGuard] },
    ]),
    BrowserAnimationsModule,
    FormsModule,
    IgxListModule,
    Menu_opcionesModule,
    IngresoUsuarioModule,
    CatalogoModule,
    NgbModule
  ],
  providers: [UsuarioGuard],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
