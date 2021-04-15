import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Usuario } from '../../models/usuario';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

private apiUrl = environment.baseUrl + 'usuario'
//URL_API= "http://localhost:4000/api/usuario"
constructor(private http:HttpClient) { }
headers: HttpHeaders= new HttpHeaders({
  "Content-Type": "application/json"
})
usuarios: Usuario[]


getUsuarios(): Observable<Usuario[]>{
  return this.http.get<Usuario[]> (this.apiUrl)
}
getUsuario(){}
postUsuario(){}
updateUsuario(){}
deleteUsuario(){}

loginUser(usuarioUniandes:String, contrasenia:String){
//:Observable <Usuario>{
  //return this.http.get<Usuario[]> (this.apiUrl)
}
}
