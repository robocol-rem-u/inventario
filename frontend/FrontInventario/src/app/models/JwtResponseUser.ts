export class JwtResponseUser{

    nombre: string
    admin: boolean
    lider: boolean
    accessToken: string
    expiresIn: string

  constructor( nombre: string,admin: boolean,lider: boolean,accessToken: string, expiresIn: string)
  {
    this.nombre=nombre,
    this.admin=admin,
    this.lider=lider,
    this.accessToken=accessToken,
    this.expiresIn=expiresIn
  }
}
