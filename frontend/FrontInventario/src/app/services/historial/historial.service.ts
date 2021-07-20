import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historial } from "../../models/historial";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private URL_API = environment.baseUrl + 'historial';

  constructor(private httpClient : HttpClient) { }


getHistorialProduct(idProducto: string):Observable<Historial[]>{
  console.warn(this.URL_API+"/"+idProducto)
  return this.httpClient.get<Historial[]>(this.URL_API+"/"+idProducto);
}


}

