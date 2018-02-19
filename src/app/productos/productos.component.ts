import { Component, OnInit, EventEmitter } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  outputs: ['totalCarritop']
})
export class ProductosComponent {
  constructor (private CarritoService: CarritoService, private httpS: HttpService){}
  totalCarritop= new EventEmitter<number>();

  add(id, nomb, imagen, precio, cantidad){
  	let productoAdd = {
  		id: id,
  		nombre: nomb,
  		imagen: imagen,
  		precio: precio,
  		cantida: cantidad

  	}
  	this.CarritoService.addCarrito(productoAdd);
  }
  onChage( event: number ){
  	this.totalCarritop.emit(event);
  }

  productos="";
  ngOnInit() {
     this.httpS.getProductos()
  	.subscribe((data: Response) => {this.productos = JSON.stringify(data); this.productos = JSON.parse(this.productos)});
  
  }
 
}
