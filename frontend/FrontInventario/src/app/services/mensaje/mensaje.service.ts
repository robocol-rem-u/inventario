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

	getMensajes():Observable<Mensaje[]>
	{
		console.warn(this.URL_API+"/")
		return this.httpClient.get<Mensaje[]>(this.URL_API);
	}

	createMessage(nombre: string, descripcion: string)
	{
		const fd = new FormData();
		fd.append("nombre", nombre);
		fd.append("descripcion", descripcion);

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
