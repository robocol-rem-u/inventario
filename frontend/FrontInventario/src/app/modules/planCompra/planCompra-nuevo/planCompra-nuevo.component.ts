import { Component, OnInit } from '@angular/core';
import {CompraService} from '../../../services/compra/compra.service'
import {NgForm} from '@angular/forms'
import {Compra} from '../../../models/compra'

@Component({
	selector: 'app-plan-compra-nuevo',
	templateUrl: './planCompra-nuevo.component.html',
	styleUrls: ['./planCompra-nuevo.component.css']
})
export class PlanCompraNuevoComponent implements OnInit
{
	compra: Compra = new Compra("", "", "", "", "", "", "", "", 0, 0, "");
	constructor(private compraService : CompraService)
	{
	}
	ngOnInit(): void
	{
	}
	addProduct(form : NgForm)
	{
		this.compraService.createCompra(form.value).subscribe(
		res => {
		console.log(res),
		form.reset
		},
		err => console.error(err)
		);
	}
}
