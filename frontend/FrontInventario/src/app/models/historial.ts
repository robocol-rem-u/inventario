export class Historial {
  cantidad: number;
  tipoMovimiento: String;
  responsable: String;
  // fecha: Date;
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
    this.tipoMovimiento = tipoMovimiento;
    this.responsable = responsable;
    this.idProducto = idProducto;
    this.createdAt=createdAt
  }
}
