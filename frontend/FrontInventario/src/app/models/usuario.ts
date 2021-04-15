export class Usuario {
  usuarioUniandes : string
  nombre: string
  contrasenia: string
  admin: boolean
  lider: boolean
  //createdAt: string
  //updatedAt: string
  //_id: string

  constructor(usuarioUniandes: string,  nombre: string, contrasenia: string, admin: boolean,lider: boolean,){
    this.usuarioUniandes= usuarioUniandes,
    this.nombre= nombre,
    this.contrasenia= contrasenia
    this.admin=admin
    this.lider=lider
  }
}
