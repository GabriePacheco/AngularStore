import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  outputs: ['buscador']
})
export class BuscadorComponent  {
  buscador = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onBusqueda (value : string){
  	this.buscador.emit(value);
  }


}
