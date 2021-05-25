export class Producto {

    nombre: string;
    descripcion: string;
    proveedor: string;
    ubicacionEnCubiculo: string;
    familia: string;
    cantidadDisponiblesParaUso: Number;
    cantidadDisponiblesParaArreglo: Number;
    cantidadEnUso: Number;
    cantidadEnArreglo: Number;
    cantidadTotal: Number;
    image: File;
  
    constructor(nombre: string, descripcion: string, proveedor: string, ubicacionEnCubiculo: string, familia: string, cantidadTotal: Number, cantidadDisponiblesParaUso: Number, cantidadDisponiblesParaArreglo: Number, cantidadEnUso: Number, cantidadEnArreglo: Number, image: File) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.proveedor = proveedor;
      this.ubicacionEnCubiculo = ubicacionEnCubiculo;
      this.familia = familia;
      this.cantidadDisponiblesParaArreglo = cantidadDisponiblesParaArreglo;
      this.cantidadDisponiblesParaUso = cantidadDisponiblesParaUso;
      this.cantidadEnArreglo = cantidadEnArreglo;
      this.cantidadEnUso = cantidadEnUso;
      this.cantidadTotal = cantidadTotal;
      this.image = image;
    }
  }