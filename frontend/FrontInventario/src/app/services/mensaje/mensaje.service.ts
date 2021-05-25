import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Mensaje} from '../../models/mensaje';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MensajeService
{
	URL_API = 'http://localhost:4000/api/mensajes'
	constructor(private httpClient : HttpClient)
	{
		
	}
	mensaje: Mensaje[]
	// getMensajes()
	// getMensajes(idProducto: string):Observable<Mensaje[]>
	getMensajes():Observable<Mensaje[]>
	{
		console.warn(this.URL_API+"/")
		// return this.httpClient.get<Historial[]>(this.URL_API+"/"+idProducto+"/historial");
		return this.httpClient.get<Mensaje[]>(this.URL_API);
	}
	//	getHistorialProduct(	idProducto: string):Observable<Historial[]>{
	//	console.warn(this.URL_API+"/"+idProducto+"/historial")
	//   return this.httpClient.get<Historial[]>(this.URL_API+"/"+idProducto+"/historial");
	// }
	// //Se hizo así y no con un método normal para hacer un POST de producto, porque por alguna razón no estaba enviando bien la imagen.
	// createMessage(nombre: string, proveedor: string, familia: string, ubicacionEnCubiculo: string, descripcion: string, cantidadTotal: string, image: File)
	createMessage(nombre: string, descripcion: string)
	{
		const fd = new FormData();
		fd.append("nombre", nombre);
		fd.append("descripcion", descripcion);
		// fd.append("familia", familia);
		// fd.append("ubicacionEnCubiculo", ubicacionEnCubiculo);
		// fd.append("descripcion", descripcion);
		// fd.append("cantidadTotal", cantidadTotal);
		// fd.append("cantidadDisponiblesParaUso", "0");
		// fd.append("cantidadDisponiblesParaArreglo", "0");
		// fd.append("cantidadEnUso", "0");
		// fd.append("cantidadEnArreglo", "0");
		// fd.append("image", image);
		return this.httpClient.post(this.URL_API, fd);
	}
	deleteMessage(msg_id: number)
	{
		console.log(" MensajeService: deleteMessage");
		console.log(msg_id);
	}
	deleteAll()
	{
		console.log(" MensajeService: deleteAll");
	}
}
