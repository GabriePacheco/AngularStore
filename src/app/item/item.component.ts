import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 item=[];
  constructor(private ruta : ActivatedRoute , private httpS1: HttpService) { }

  ngOnInit() {
  	let name = this.ruta.snapshot.params['name'];
  	this.httpS1.getProductos()
  	.subscribe((data:Response)=> {
     	let pro = JSON.parse(JSON.stringify(data) );
       var productos =  pro.filter(producto => producto.nombre.toLowerCase().indexOf(name.toLowerCase()) >-1) ; 
       this.item = productos;
    });
   
    

  }

}
