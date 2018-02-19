import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
	valor : number;
  constructor(private carritoS : CarritoService) { }
  carro = this.carritoS.showCarrito();
  
  ngOnInit(){
  	this.valor = this.carritoS.valorar();
  }
}
