import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Producto} from '../../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URL_API = 'http://localhost:4000/api/products'

  constructor(private httpClient : HttpClient) { }

  getProducts(){
    return this.httpClient.get<Producto>(this.URL_API);
  }

  createProduct(producto: Producto){
    return this.httpClient.post(this.URL_API, producto);
  }
}
