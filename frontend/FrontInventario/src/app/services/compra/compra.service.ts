import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Compra} from '../../models/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService
{
  URL_API = 'http://localhost:4000/api/compras'
  constructor(private httpClient : HttpClient) { }
  getCompras()
  {
    return this.httpClient.get<Compra>(this.URL_API);
  }
  createCompra(compra: Compra)
  {
    return this.httpClient.post(this.URL_API, compra);
  }
}
