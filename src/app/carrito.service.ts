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



}
