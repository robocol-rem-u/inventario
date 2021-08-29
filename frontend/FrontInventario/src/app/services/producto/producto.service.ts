import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http'
import {Producto} from '../../models/producto';
import { Historial } from "../../models/historial";
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prestamo } from 'src/app/models/prestamo';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private URL_API = environment.baseUrl + 'productos';

  constructor(private httpClient : HttpClient) { }

  getProducts():Observable<Producto[]>{
    console.log(this.URL_API);
    return this.httpClient.get<Producto[]>(this.URL_API);
  }
  //Se hizo así y no con un método normal para hacer un POST de producto, porque por alguna razón no estaba enviando bien la imagen.
  createProductByHtml(nombre: string, proveedor: string, familia: string, ubicacionEnCubiculo: string, descripcion: string, cantidadDisponiblesParaUso: string, cantidadDisponiblesParaArreglo: string, cantidadEnUso: string, cantidadEnArreglo: string, image: File){
    const fd = new FormData();

    fd.append("nombre", nombre);
    fd.append("proveedor", proveedor);
    fd.append("familia", familia);
    fd.append("ubicacionEnCubiculo", ubicacionEnCubiculo);
    fd.append("descripcion", descripcion);
    fd.append("cantidadTotal", String(Number(cantidadDisponiblesParaUso) + Number(cantidadDisponiblesParaArreglo) + Number(cantidadEnUso) + Number(cantidadEnArreglo)));
    fd.append("cantidadDisponiblesParaUso", cantidadDisponiblesParaUso);
    fd.append("cantidadDisponiblesParaArreglo", cantidadDisponiblesParaArreglo);
    fd.append("cantidadEnUso", cantidadEnUso);
    fd.append("cantidadEnArreglo", cantidadEnArreglo);
    fd.append("image", image);

    return this.httpClient.post(this.URL_API, fd,{responseType: 'text'});
  }

  getProductoPorId(idProducto: string):Observable<Producto>{
    return this.httpClient.get<Producto>(this.URL_API+"/"+idProducto);

  }
  deleteProductoId(idProducto: string):Observable<Producto>{
    return this.httpClient.delete<Producto>(this.URL_API+"/"+idProducto);

  }
  moverProductoId(idProducto: string, desde:String, hasta:String, cantidad: String):Observable<Producto>{
    return this.httpClient.put<Producto>(this.URL_API+"/mover/"+idProducto,{"desde":desde,"hasta": hasta,"cantidad":cantidad} ).pipe(
      catchError(err =>{
        console.log(err.error)
        return throwError(err);
      })
    )
  }
  agregarUnidadProductoId(idProducto: string, agregar:String, cantidad: String):Observable<Producto>{
    return this.httpClient.put<Producto>(this.URL_API+"/agregar/"+idProducto,{"agregar":agregar,"cantidad":cantidad} ).pipe(
      catchError(err =>{
        console.log(err.error)
        return throwError(err);
      })
    )
  }
  botarCantidadProductoId(idProducto: string, eliminar:String, cantidad: String):Observable<Producto>{
    return this.httpClient.put<Producto>(this.URL_API+"/eliminar/"+idProducto,{"eliminar":eliminar,"cantidad":cantidad} ).pipe(
      catchError(err =>{
        console.log(err.error)
        return throwError(err);
      })
    )
  }
}
