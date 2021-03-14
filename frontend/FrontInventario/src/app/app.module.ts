import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RegistroModule } from './registro/registro.module';
import { RegistroPrincipalComponent } from './registro/registro-principal/registro-principal.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RegistroModule,
    RouterModule.forRoot([
      {path: 'registro', component: RegistroPrincipalComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
