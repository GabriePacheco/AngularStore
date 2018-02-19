import { Component, OnInit } from '@angular/core';
import { CarritoService } from "../carrito.service";

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css'], 
  inputs: ['totalCarritop', 'tot']
 

})
export class BarraComponent  {
	tot:number;
	totalCarritop:number;
	constructor (private carritos: CarritoService){
		

	}
	onInit (){
		this.tot  = this.carritos.contarCarrito();
	}
	
	

}
