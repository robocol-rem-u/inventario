import { Component, Host, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { JwtResponseUser } from 'src/app/models/JwtResponseUser';

@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.component.html',
  styleUrls: ['./ingreso-usuario.component.css']
})
export class IngresoUsuarioComponent implements OnInit {

   constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder, private router: Router
   ) {}
   ingreso:boolean= true
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

    this.usuarioService.loginUser(form.value).subscribe(res=>{
      console.log("xd", form.value)
      this.router.navigateByUrl("/menu"),
      this.infoUsuario=res
    })
    this.ingreso= false;
  }
  darInfoUsuario(){
    return this.infoUsuario
  }


}