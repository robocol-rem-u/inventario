import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prestamo } from 'src/app/models/prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  private URL_API = environment.baseUrl + 'prestamos';

  constructor(private httpClient : HttpClient) { }

getPrestamoProduct(idProducto: string):Observable<Prestamo[]>{
  console.warn(this.URL_API+"/"+idProducto)
  return this.httpClient.get<Prestamo[]>(this.URL_API+"/"+idProducto);
}
}
