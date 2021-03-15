import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
// Igx
import { IgxListModule } from "igniteui-angular";
// Registro
import { RegistroModule } from './registro/registro.module';
import { RegistroPrincipalComponent } from './registro/registro-principal/registro-principal.component';
// Plan de compra
import { PlanCompraModule } from './planCompra/planCompra.module';
import { PlanCompraPrincipalComponent } from './planCompra/planCompra-principal/planCompra-principal.component';

@NgModule({
  declarations: [
  AppComponent
  ],
  imports: [
    BrowserModule,
    RegistroModule,
    RouterModule.forRoot([
      { path: 'registro', component: RegistroPrincipalComponent },
      { path: 'planCompra', component: PlanCompraPrincipalComponent },
    ]),
    BrowserAnimationsModule,
    FormsModule,
    IgxListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule {}