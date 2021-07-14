import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuardLogged implements CanActivate {

  constructor (private userService: UsuarioService, private router: Router){}

  canActivate(): boolean{
    console.log(this.userService.loggedIn())
    if (this.userService.loggedIn()) {
      this.router.navigate(['/robocol/menu'])
      return false;
    }
    else{
      return true;
  }
 }
}

