import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


URL_API= "http://localhost:4000/api/usuario"
constructor(private http:HttpClient) { }
 usuarios: Usuario[]

getUsuarios(){
  return this.http.get(this.URL_API)
}
getUsuario(){}
postUsuario(){}
updateUsuario(){}
deleteUsuario(){}
}
