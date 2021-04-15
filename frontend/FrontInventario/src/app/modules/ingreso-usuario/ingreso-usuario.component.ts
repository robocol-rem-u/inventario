import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.component.html',
  styleUrls: ['./ingreso-usuario.component.css']
})
export class IngresoUsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder, private router: Router) {

   }
  private user: Usuario={
    usuarioUniandes:"",
    nombre: "",
    contrasenia: "",
    admin: false,
    lider: false
  }
  userForm : FormGroup;
  ngOnInit() {
    this.userForm= this.formBuilder.group({
      usuarioUniandes :["", [Validators.required]],
      contrasenia:["", [Validators.required]]
    })
  }
  onLogin(form){
  console.log("xd", form.value)
  this.usuarioService.loginUser(form.value).subscribe(res=>{
    this.router.navigateByUrl("/menu")


  })
  }

}
