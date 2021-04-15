import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.component.html',
  styleUrls: ['./ingreso-usuario.component.css']
})
export class IngresoUsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }
  private user: Usuario={
    usuarioUniandes:"",
    nombre: "",
    contrasenia: "",
    admin: false,
    lider: false
  }
  ngOnInit() {
  }
  onLogin(){
    return this.usuarioService
  }

}
