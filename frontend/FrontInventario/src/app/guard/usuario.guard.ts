import { Injectable } from '@angular/core';
// canActivate para seleccionar como el usuario va a tener permisos
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  constructor (private userService: UsuarioService, private router: Router){}

  canActivate(): boolean{
    console.log(this.userService.loggedIn())
 //return true;
    if (this.userService.loggedIn()) {
      return true;
    }
//cuando ingresa
    else{
      this.router.navigate(['/robocol/ingreso-usuario']);
      return false;
  }
 }
}

