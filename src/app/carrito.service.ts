import { Injectable } from '@angular/core';

@Injectable()
export class CarritoService {
 private carrito: string[] =[];
 addCarrito(producto){
 	this.carrito.push(producto);
 	console.log(producto);
 }
 contarCarrito(){
 	return this.carrito.length;
 }

 showCarrito(){
 	return this.carrito;
 }

 valorar(){
 	let total = 0;

 	for (let i of this.carrito) {
		i = JSON.stringify(i);
	
		console.log(i);
	}
 	return total;

 }



}
