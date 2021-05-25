import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Mensaje } from "../../../models/mensaje"
import { MensajeService } from '../../../services/mensaje/mensaje.service'
// import { EventEmitter } from '@angular/core';

interface HtmlInputEvent extends Event{
	target : HTMLInputElement & EventTarget;
}

@Component({
	selector: 'app-mensajes-principal',
	templateUrl: './mensajes-principal.component.html',
	styleUrls: ['./mensajes-principal.component.css']
})
export class MensajesPrincipalComponent implements OnInit
{

	file: File;
	msgs: Mensaje[];
	new_msgs: Mensaje[];
	en_msgs: number[];

	// @Output() mensajes : EventEmitter<string> = new EventEmitter<string>();
	constructor(private mensajeService : MensajeService, private router: Router)
	{

	}

	ngOnInit(): void
	{
		this.mensajeService.getMensajes().subscribe
		(
			mensajes =>
			{
				console.log(mensajes);
				this.msgs = mensajes;
				this.en_msgs = [];
				for (var i = 0; i < this.msgs.length; ++i)
				{
					this.en_msgs.push(1);
				}
				console.log(this.en_msgs);
				// this.msgs=new Mensaje(mensajes.nombre, mensajes.descripcion);
				// this.mensajesFinal=new Mensaje[](mensajes.nombre, mensajes.descripcion)
			}
		);
		// this.msgs = new Mensaje[]();
		// this.mensajes = new Mensaje(usuario.usuarioUniandes, usuario.nombre)
	}

	deleteMessage(msg_id: number)
	{
		// var pos = 0;
		for (var i = 1; i < this.msgs.length+1; ++i)
		{
			var id = "msgNum"+i.toString();
			let element = document.getElementById(id);
			// console.log(element);
			let state = element['checked'];
			console.log(state);
			//var msg = this.msgs[i];
			//var id = msg["id"];
			console.log(this.msgs[i]);
			if(state=="true")
			{
				console.log(this.msgs[i]);
				this.msgs.splice(i, 1);
			// 	// this.msgs = [];
			}
			// else
			// {
			// 	this.new_msgs = this.msgs;
			// 	pos = pos + 1;
			// }
		}
		//this.msgs
		
		// console.log(" MensajesPrincipalComponent: deleteMessage");
		// this.mensajeService.deleteMessage(msg_id);
	}
	deleteAll()
	{
		console.log(" MensajesPrincipalComponent: deleteAll");
		this.mensajeService.deleteAll();
		this.msgs = [];
	}

	onChkBoxChange(e: MouseEvent, idx: number)
	{
		// console.log(" MensajesPrincipalComponent: onChkBoxChange");
		// console.log(e);
		// console.log(idx);
		if(this.en_msgs[idx-1]==1)
		{
			this.en_msgs[idx-1] = 0;
		}
	}
	changeAll(event: any)
	{
		//console.log(event.currentTarget.checked);
		for (var i = 1; i < this.msgs.length+1; ++i)
		{
			var id = "msgNum"+i.toString();
			let element = document.getElementById(id);
			console.log(element['checked']);
			element['checked'] = event.currentTarget.checked;
			//console.log(id);
		}
	}
	btnClick = function ()
	{
		this.router.navigateByUrl('/menu');
	};


	// addProductByHtml(nombre: HTMLInputElement, proveedor: HTMLSelectElement, familia: HTMLSelectElement, ubicacionEnCubiculo: HTMLSelectElement, descripcion: HTMLTextAreaElement, cantidadTotal: HTMLInputElement)
	// {
	//   // this.mensajeService.createProductByHtml(nombre.value, proveedor.value, familia.value, ubicacionEnCubiculo.value, descripcion.value, cantidadTotal.value, this.file).subscribe(
	//   //   res => console.log(res), err => console.log(err)
	//   // )
	// }

	// onPhotoSelected(event: HtmlInputEvent): void
	// {
	//   if (event.target.files && event.target.files[0]){
	//     this.file = <File> event.target.files[0];
	//     //image preview
	//     const reader = new FileReader();
	//     reader.onload = e => this.photoSelected = reader.result;
	//     reader.readAsDataURL(this.file);
	//   } 
	// }
	
}
