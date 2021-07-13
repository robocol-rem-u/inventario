import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Producto} from '../../models/producto';
import { Historial } from "../../models/historial";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URL_API = 'http://localhost:5000/api/productos'

  constructor(private httpClient : HttpClient) { }

  getProducts(){
    return this.httpClient.get<Producto>(this.URL_API);
  }
  getHistorialProduct(idProducto: string):Observable<Historial[]>{
    console.warn(this.URL_API+"/"+idProducto+"/historial")
    return this.httpClient.get<Historial[]>(this.URL_API+"/"+idProducto+"/historial");

  }


  //Se hizo así y no con un método normal para hacer un POST de producto, porque por alguna razón no estaba enviando bien la imagen.
  createProductByHtml(nombre: string, proveedor: string, familia: string, ubicacionEnCubiculo: string, descripcion: string, cantidadTotal: string, image: File){
    const fd = new FormData();

    fd.append("nombre", nombre);
    fd.append("proveedor", proveedor);
    fd.append("familia", familia);
    fd.append("ubicacionEnCubiculo", ubicacionEnCubiculo);
    fd.append("descripcion", descripcion);
    fd.append("cantidadTotal", cantidadTotal);
    fd.append("cantidadDisponiblesParaUso", "0");
    fd.append("cantidadDisponiblesParaArreglo", "0");
    fd.append("cantidadEnUso", "0");
    fd.append("cantidadEnArreglo", "0");
    fd.append("image", image);

    return this.httpClient.post(this.URL_API, fd);
  }
}
