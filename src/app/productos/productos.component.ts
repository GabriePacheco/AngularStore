import { Component, OnInit } from '@angular/core';
import { barra } from '../barra/barra.component.ts',
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	
  }
  productos = [
  		{id : "1", 	nombre: "Tomates", 	imagen: "tomate.jpg", 	presio: 10,	stock: 15 	},
  		{id : "1", 	nombre: "Tomates", 	imagen: "tomate.jpg", 	presio: 10,	stock: 15 	},
  		{id : "1", 	nombre: "Tomates", 	imagen: "tomate.jpg", 	presio: 10,	stock: 15 	},
  		{id : "1", 	nombre: "Tomates", 	imagen: "tomate.jpg", 	presio: 10,	stock: 15 	},
  		{id : "1", 	nombre: "Tomates", 	imagen: "tomate.jpg", 	presio: 10,	stock: 15 	},
  		{id : "1", 	nombre: "Tomates", 	imagen: "tomate.jpg", 	presio: 10,	stock: 15 	},
  		{id : "1", 	nombre: "Tomates", 	imagen: "tomate.jpg", 	presio: 10,	stock: 15 	}

  	];

  addCarrito(){

  	alert("se agrego");
  }


}
