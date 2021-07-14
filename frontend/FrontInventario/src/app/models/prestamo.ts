export class Prestamo {
    cantidad: number;
    responsable: String;
    idProducto: number;
    createdAt: Date

    constructor(
      cantidad: number,
      tipoMovimiento: String,
      responsable: String,
      idProducto: number,
      createdAt: Date
    ) {
      this.cantidad = cantidad;
      this.responsable = responsable;
      this.idProducto = idProducto;
      this.createdAt=createdAt
    }
}
