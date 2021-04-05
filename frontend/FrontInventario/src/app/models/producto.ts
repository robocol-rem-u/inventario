export class Producto {
    //greeting: string;

    nombre: string;
    //id: string;
    descripcion: string;
    proveedor: string;
    responsable: string;
    ubicacion: string;
    estado: string;
    susbsistemaQueLoNecesita: string;
    comentariosExtra: string;
    disponibleParaUso: number;
    disponibleParaArreglo: number;
    foto: string;
  
    constructor(nombre: string, descripcion: string, proveedor: string, responsable: string, ubicacion: string, estado: string, susbsistemaQueLoNecesita: string, comentariosExtra: string, disponibleParaUso: number, disponibleParaArreglo: number, foto: string) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.proveedor = proveedor;
      this.responsable = responsable;
      this.ubicacion = ubicacion;
      this.estado = estado;
      this.susbsistemaQueLoNecesita = susbsistemaQueLoNecesita;
      this.comentariosExtra = comentariosExtra;
      this.disponibleParaUso = disponibleParaUso;
      this.disponibleParaArreglo = disponibleParaArreglo;
      this.foto = foto;
    }
  }