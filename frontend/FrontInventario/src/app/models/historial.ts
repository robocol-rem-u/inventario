export class Historial {
  cantidad: number;
  tipoMovimiento: String;
  responsable: String;
  id_Producto: String;
  createdAt: Date

  constructor(
    cantidad: number,
    tipoMovimiento: String,
    responsable: String,
    id_Producto: String,
    createdAt: Date
  ) {
    this.cantidad = cantidad;
    this.tipoMovimiento = tipoMovimiento;
    this.responsable = responsable;
    this.id_Producto = id_Producto;
    this.createdAt=createdAt
  }
}
