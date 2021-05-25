import { Component } from '@angular/core';
import { JwtResponseUser } from './models/JwtResponseUser';
import { UsuarioService } from './services/usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontInventario';
  constructor(private usuarioService: UsuarioService){}
  usuario : string
  //usuario : JwtResponseUser
  loggedIn():boolean{
    return this.usuarioService.loggedIn();
  }
  logout(){
    this.usuarioService.logout();
  }
  actualizar(){
 // this.usuario=usuario
  // this.usuario=usuario
  // console.log("llego aca " +   usuario)
  }

}
