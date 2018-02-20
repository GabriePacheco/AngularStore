import { Injectable } from '@angular/core';

@Injectable()
export class CarritoService {
 carrito: string[] =[];
 total: number =0;
 addCarrito(producto){
 	this.carrito.push(producto);
 	this.total += (producto.cantidad * producto.precio);
 	
 }
 contarCarrito(){
 	return this.carrito.length;
 }

 showCarrito(){
 	return this.carrito;
 }

 valorar(){
	return this.total;
 }

 vaciar (){
  	this.total=0;
 	this.carrito=[];
 }

}
