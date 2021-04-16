import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontInventario';
  constructor(private usuarioService: UsuarioService){}
  loggedIn():boolean{
    return this.usuarioService.loggedIn();
  }
  logout(){
    this.usuarioService.logout();
  }

}
