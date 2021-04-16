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
//URL_API= "http://localhost:4000/api/usuario"
authSubject = new BehaviorSubject(false);
private token: string;

constructor(private http:HttpClient, private router : Router) { }
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

loginUser(usuario: Usuario):Observable <JwtResponseUser>{
  return this.http.post<JwtResponseUser> (this.apiUrl+"/login", usuario).pipe(
    tap((res: JwtResponseUser)=> {
      if (res){
        //guardar token
        this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn)
      }
    })
  );
}

logout(): void {
  this.token = '';
  localStorage.removeItem("ACCESS_TOKEN");
  localStorage.removeItem("EXPIRES_IN");
  this.router.navigate(['/ingreso-usuario'])
}

private saveToken(token: string, expiresIn: string): void {
  localStorage.setItem("ACCESS_TOKEN", token);
  localStorage.setItem("EXPIRES_IN", expiresIn);
  this.token = token;
}

private getToken(): string {
  if (!this.token) {
    this.token = localStorage.getItem("ACCESS_TOKEN");
  }
  return this.token;
}
loggedIn(): boolean{
  // si el token existe -> true
  return !!localStorage.getItem('ACCESS_TOKEN')
}
}
