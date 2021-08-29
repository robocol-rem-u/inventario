import { Component, Host, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { JwtResponseUser } from 'src/app/models/JwtResponseUser';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.component.html',
  styleUrls: ['./ingreso-usuario.component.css']
})
export class IngresoUsuarioComponent implements OnInit {

   constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) {}
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
    this.usuarioService.loginUser(form.value).subscribe(
      res=>{
        console.log("xd", form.value);
        this.ingreso = true;
        this.toastr.success("¡Bienvenido!");
        this.router.navigateByUrl("/robocol/menu"),
        this.infoUsuario=res
      },
      err=>{
        this.toastr.error("Tu usuario o contraseña son incorrectos", "¡Ups!");
        this.ingreso=false;
        console.log(err);
      }
      )
  }

  darInfoUsuario(){
    return this.infoUsuario
  }


}
