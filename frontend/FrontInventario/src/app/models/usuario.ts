export class Usuario {
  usuarioUniandes : string
  nombre: string
  apellido:string
  admin: boolean
  lider: boolean
  
  constructor(usuarioUniandes: string,  nombre: string, apellido: string, admin: boolean,lider: boolean){
    this.usuarioUniandes= usuarioUniandes
    this.nombre= nombre
    this.apellido=apellido
    this.admin=admin
    this.lider=lider
  }
}
