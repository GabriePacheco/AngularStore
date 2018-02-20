import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { HttpService  }  from '../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  productosFiltrados : any ;
  constructor(private carritoS: CarritoService, private http: HttpService) { }
  totalCarritop:number;
  filtro:string;
  mostrar(){
  	this.totalCarritop = this.carritoS.contarCarrito();
  }
  filtrar(valor){
    this.http.getProductos()
    .subscribe((data:Response)=> {
     let pro = JSON.parse(JSON.stringify(data) );
       var productos =  pro.filter(producto => producto.nombre.toLowerCase().indexOf(valor.toLowerCase()) >-1) ; 
       this.productosFiltrados = productos;
    });
    
    
    
  }


}
