import { Component, Host, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { JwtResponseUser } from 'src/app/models/JwtResponseUser';
import { EventEmitter } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.component.html',
  styleUrls: ['./ingreso-usuario.component.css']
})
export class IngresoUsuarioComponent implements OnInit {

  @Output()  usuario : EventEmitter<string> = new EventEmitter<string>();
  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder, private router: Router,
   ) {}
  infoUsuario: JwtResponseUser
  usuarioFinal: Usuario
  userForm : FormGroup;
  ngOnInit() {

    this.userForm= this.formBuilder.group({
      usuarioUniandes :["", [Validators.required]],
      contrasenia:["", [Validators.required]]
    })
  }
  onLogin(form){
  console.log("xd", form.value.usuarioUniandes)
  this.usuarioService.loginUser(form.value).subscribe(res=>{
    console.log("este es el res"+res.nombre)
    this.infoUsuario=res
    console.warn(this.infoUsuario +"funciona?"+this.infoUsuario.nombre+this.infoUsuario.lider)
    this.usuario.emit(res.nombre)

    this.usuarioService.getUsuarioPorUsuarioUniandes(form.value.usuarioUniandes)
    .subscribe(usuario =>{
      this.usuarioFinal=new Usuario(usuario.usuarioUniandes, usuario.nombre, usuario.apellido, usuario.admin, usuario.lider)
      console.warn("ng init1 "+this.usuarioFinal)
      this.router.navigateByUrl("/menu")
    }
     )
  })

    // this.usuario.emit(this.infoUsuario.nombre)
  }
  darInfoUsuario(){
    return this.infoUsuario
  }


}
