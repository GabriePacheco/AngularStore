import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private carritoS: CarritoService) { }
  totalCarritop:number;
  filtro:string;
  mostrar(){
  	this.totalCarritop = this.carritoS.contarCarrito();
  }
  filtar(valor){
  	console.log(valor);
  	
  }


}
