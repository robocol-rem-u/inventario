import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Usuario } from '../../models/usuario';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtResponseUser } from 'src/app/models/JwtResponseUser';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

private apiUrl = environment.baseUrl + 'usuario'
authSubject = new BehaviorSubject(false);
private token: string;

constructor(private http:HttpClient, private router : Router) { }
headers: HttpHeaders= new HttpHeaders({
  "Content-Type": "application/json"
})
usuarios: Usuario[]

getUsuarioPorUsuarioUniandes(usuarioUniandes:string): Observable<Usuario>{
  const usuario= this.http.get<Usuario>(this.apiUrl+"/"+usuarioUniandes)
  console.log("esto del servicio"+ usuario+"si desgloso")
  return usuario
}
getUsuarios(): Observable<Usuario[]>{
  return this.http.get<Usuario[]> (this.apiUrl)
}
getUsuario(){}
postUsuario(){}
updateUsuario(){}
deleteUsuario(){}

loginUser(usuario: Usuario):Observable <JwtResponseUser>{
  return this.http.post<JwtResponseUser> (this.apiUrl+"/login", usuario).pipe(
    tap((res: JwtResponseUser)=> {
      if (res){
        //guardar token
        this.saveToken(res.accessToken, res.expiresIn, usuario.usuarioUniandes)
      }
    })
  );
}

logout(): void {
  this.token = '';
  localStorage.removeItem("USER")
  this.router.navigate(['/robocol/ingreso-usuario'])
}

private saveToken(token: string, expiresIn: string, usuario: string): void {
  localStorage.setItem("USER", usuario);
  this.token = token;
}

private getToken(): string {
  if (!this.token) {
    this.token = localStorage.getItem("USER");
  }
  return this.token;
}
loggedIn(): boolean{
  // si el token existe -> true
  return !!localStorage.getItem('USER')
}
}
