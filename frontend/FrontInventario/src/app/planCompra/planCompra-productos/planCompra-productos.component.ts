import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-plan-compra-productos',
  templateUrl: './planCompra-productos.component.html',
  styleUrls: ['./planCompra-productos.component.scss']
})
export class PlanCompraProductosComponent implements OnInit //, OnDestroy
{

	lista:string[]=["1","2","3","4"];

	// @Input() ads: AdItem[];
	// public msg = 'Bye Component is here!!!';
	// currentAdIndex = -1;
	// interval: any;

	constructor()//private componentFactoryResolver: ComponentFactoryResolver)
	{
	}

	ngOnInit(): void
	{
		// this.loadComponent();
	}
	// ngOnDestroy()
	// {
	// 	clearInterval(this.interval);
	// }
	// loadComponent()
	// {
	// 	this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
	// }
	// public render(): void
	// {
		// msg = 'JA!';
		// console.log("JEJE");
	// }
}
